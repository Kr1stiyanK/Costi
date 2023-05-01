package com.pts.costi_backend.model.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@Configuration
public class EmailServiceImpl implements EmailService {
    Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    @Autowired
    private JavaMailSender mailSender;

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

}