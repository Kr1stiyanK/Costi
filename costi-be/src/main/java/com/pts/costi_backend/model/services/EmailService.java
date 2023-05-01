package com.pts.costi_backend.model.services;

public interface EmailService {
    void sendSimpleMessage(String toEmail, String body, String subject);
}