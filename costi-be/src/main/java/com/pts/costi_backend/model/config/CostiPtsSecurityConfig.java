package com.pts.costi_backend.model.config;

import com.pts.costi_backend.model.repositories.UserEntityRepository;
import com.pts.costi_backend.model.services.UserSecurityDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class CostiPtsSecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new Pbkdf2PasswordEncoder();
    }

    @Bean
    public SecurityFilterChain config(HttpSecurity http) throws Exception {
        //TODO: implement security urls and paths
        http.authorizeHttpRequests()
                .antMatchers("./.", "/users/login", "/users/register").permitAll()
                .and()
                .formLogin()
                .loginPage("/users/login")
                .usernameParameter(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_USERNAME_KEY)
                .passwordParameter(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_PASSWORD_KEY)
                .defaultSuccessUrl("/")
                .and()
                .csrf().disable();
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(UserEntityRepository userEntityRepository) {
        return new UserSecurityDetailsService(userEntityRepository);
    }


}
