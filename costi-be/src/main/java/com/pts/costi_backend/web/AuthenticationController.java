package com.pts.costi_backend.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class AuthenticationController {
    
    @GetMapping("/register")
    public ResponseEntity<String> register() {
        return ResponseEntity.ok("register");
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam() String username) {
        System.out.println(username);
        return ResponseEntity.ok("login");
    }
}
