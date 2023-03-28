package com.pts.costi_backend.model.dtos;

import com.pts.costi_backend.model.validations.PasswordsMatch;
import com.pts.costi_backend.model.validations.UniqueEmailAddress;
import com.pts.costi_backend.model.validations.UniqueUserName;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@PasswordsMatch(
        firstMatch = "password",
        secondMatch = "confirmPassword",
        message = "Passwords do not match!"
)
public class UserRegistrationDTO {
    @NotNull
    @Email
    @UniqueEmailAddress
    private String email;

    @NotBlank
    @Size(min = 4, max = 50)
    @UniqueUserName
    private String username;

    @NotNull
    @Size(min = 6, max = 25)

    private String password;

    @NotNull
    @Size(min = 6, max = 25)
    private String confirmPassword;

    public UserRegistrationDTO() {
    }

    public String getEmail() {
        return email;
    }

    public UserRegistrationDTO setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public UserRegistrationDTO setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserRegistrationDTO setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public UserRegistrationDTO setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
        return this;
    }
}
