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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;



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
    @Configuration
    public class EmailServiceImpl implements EmailService {
        @Autowired
        private JavaMailSender mailSender;
        Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

        @Override
        public void sendSimpleMessage(String toEmail,
                                      String body,
                                      String subject) {
            SimpleMailMessage message = new SimpleMailMessage();
//        If using gmail instead of MailTrap uncomment
//        message.setFrom("erikul1994@gmail.com");
            message.setTo(toEmail);
            message.setText(body);
            message.setSubject(subject);

            mailSender.send(message);
            logger.info("Mail Sent...");
        }

        @Override
        public void sendMessageWithAttachment(String toEmail,
                                              String body,
                                              String subject,
                                              String attachment) throws MessagingException {

            MimeMessage mimeMessage = mailSender.createMimeMessage();

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
//        If using gmail instead of MailTrap uncomment
//        mimeMessageHelper.setFrom("erikul1994@gmail.com");
            mimeMessageHelper.setTo(toEmail);
            mimeMessageHelper.setText(body);
            mimeMessageHelper.setSubject(subject);

            /* FileSystemResource fileSystem
                    = new FileSystemResource(new File(attachment));

            mimeMessageHelper.addAttachment(fileSystem.getFilename(),
                    fileSystem); */

            mailSender.send(mimeMessage);
            logger.info("Mail Sent...");

        }
    }











}








