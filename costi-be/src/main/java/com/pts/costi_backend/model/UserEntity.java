package com.pts.costi_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String roles;

    public UserEntity(String email, String username, String password, String roles) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    public UserEntity() {
    }

    public int getId() {
        return id;
    }

    public UserEntity setId(int id) {
        this.id = id;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserEntity setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public UserEntity setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserEntity setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getRoles() {
        return roles;
    }

    public UserEntity setRoles(String roles) {
        this.roles = roles;
        return this;
    }
}

