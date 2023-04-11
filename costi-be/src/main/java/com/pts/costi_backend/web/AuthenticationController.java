package com.pts.costi_backend.web;

import com.pts.costi_backend.model.dtos.UserRegistrationDTO;
import com.pts.costi_backend.model.services.UserEntityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class AuthenticationController {
    private final UserEntityService userEntityService;

    public AuthenticationController(UserEntityService userEntityService) {
        this.userEntityService = userEntityService;
    }
    @GetMapping("/register")
    public ResponseEntity<Boolean> register(@Valid UserRegistrationDTO userRegistrationDTO) {
        return ResponseEntity.ok(this.userEntityService.register(userRegistrationDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestParam() String username) {
        System.out.println(username);
        return ResponseEntity.ok(true);
    }
}