package com.pts.costi_backend.model.services;

import com.pts.costi_backend.model.UserEntity;
import com.pts.costi_backend.model.dtos.UserRegistrationDTO;
import com.pts.costi_backend.model.repositories.UserEntityRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserEntityService {

    private final UserEntityRepository userEntityRepository;

    private final PasswordEncoder passwordEncoder;

    public UserEntityService(UserEntityRepository userEntityRepository, PasswordEncoder passwordEncoder) {
        this.userEntityRepository = userEntityRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Boolean register(UserRegistrationDTO userRegistrationDTO) {
            if (this.userEntityRepository.findUserEntityByUsername(userRegistrationDTO.getUsername()).isEmpty()) {
                UserEntity newUser = new UserEntity(
                        userRegistrationDTO.getEmail(),
                        userRegistrationDTO.getUsername(),
                        passwordEncoder.encode(userRegistrationDTO.getPassword()),
                        "ROLE_USER");
                this.userEntityRepository.save(newUser);



                return true;
            }
        return false;
    }
}
