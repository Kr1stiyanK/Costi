package com.pts.costi_backend.model.config;
import com.pts.costi_backend.model.repositories.UserEntityRepository;
import com.pts.costi_backend.model.services.UserSecurityDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import java.util.Properties;

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
                .requestMatchers("/application/get-events").hasAuthority("ROLE_ANONYMOUS")
                .requestMatchers("/users/logout").hasAuthority("ROLE_ANONYMOUS")
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
    
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.mailtrap.io");
        mailSender.setPort(587);

        mailSender.setUsername("53419e4a7b186b");
        mailSender.setPassword("65fe3fb0a4da3f");

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");

        return mailSender;
    }

}








