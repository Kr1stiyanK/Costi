package com.pts.costi_backend.web;

import com.pts.costi_backend.model.dtos.UserLoginDTO;
import com.pts.costi_backend.model.dtos.UserRegistrationDTO;
import com.pts.costi_backend.model.services.UserEntityService;
import com.pts.costi_backend.model.services.UserSecurityDetailsService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class AuthenticationController {
    private final UserEntityService userEntityService;

    private UserSecurityDetailsService userDetailsService;

    public AuthenticationController(UserEntityService userEntityService, UserSecurityDetailsService userDetailsService) {
        this.userEntityService = userEntityService;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/register")
    public ResponseEntity<Boolean> register(@RequestBody @Valid UserRegistrationDTO userRegistrationDTO) {
        return ResponseEntity.ok(this.userEntityService.register(userRegistrationDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody @Valid UserLoginDTO dto) {
        try {
            this.userDetailsService.loadUserByUsername(dto.getUsername());
        } catch (UsernameNotFoundException ex) {
            return ResponseEntity.ok(false);
        }
        return ResponseEntity.ok(this.userDetailsService.loadUserByUsername(dto.getUsername()) != null);
    }
}