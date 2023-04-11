package com.pts.costi_backend.model.dtos;

import com.pts.costi_backend.model.validations.UniqueUserName;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserLoginDTO {

    @NotBlank
    @Size(min = 4, max = 50)
    @UniqueUserName
    private String username;

    @NotNull
    @Size(min = 6, max = 25)
    private String password;

    public UserLoginDTO() {
    }

    public String getUsername() {
        return username;
    }

    public UserLoginDTO setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserLoginDTO setPassword(String password) {
        this.password = password;
        return this;
    }
}