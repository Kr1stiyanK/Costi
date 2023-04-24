package com.pts.costi_backend.model.config;

import com.pts.costi_backend.model.repositories.UserEntityRepository;
import com.pts.costi_backend.model.services.UserSecurityDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
public class CostiPtsSecurityConfig {
    private UserEntityRepository userEntityRepository;
    
    public CostiPtsSecurityConfig(UserEntityRepository userEntityRepository) {
        this.userEntityRepository = userEntityRepository;
    }
    
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new Pbkdf2PasswordEncoder();
    }
    
    @Bean
    public SecurityFilterChain config(HttpSecurity http) throws Exception {
        
        return http.httpBasic().and().csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/users/login", "/users/register").permitAll()
                .requestMatchers("/application/event").hasAuthority("ROLE_ANONYMOUS")
                .requestMatchers("/application/delete-event").hasAuthority("ROLE_ANONYMOUS")
                .requestMatchers("/application/delete-all").hasAuthority("ROLE_ANONYMOUS")
                .and()
                .formLogin(Customizer.withDefaults())
                .logout()
                .logoutUrl("/users/logout")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .and()
                .build();
        
    }
    
    @Bean
    public UserDetailsService userDetailsService() {
        return new UserSecurityDetailsService(userEntityRepository);
    }
    
    //TODO: UserEntityMapper
    //Jira Source Issue: PC-8 https://ptscosti.atlassian.net/browse/PC-8
//    @Bean
//    public UserEntityMapper userEntityMapper() {
//        return new UserEntityMapper() {
//            @Override
//            public UserEntity userRegistrationDtoToUserEntity(UserRegistrationDTO userRegistrationDTO) {
//                return null;
//            }
//        };
//    }
    
    
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }
}
