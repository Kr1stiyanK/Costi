package com.pts.costi_backend.model.services;

import com.pts.costi_backend.model.UserEntity;
import com.pts.costi_backend.model.dtos.UserRegistrationDTO;
import com.pts.costi_backend.model.mapper.UserEntityMapper;
import com.pts.costi_backend.model.repositories.UserEntityRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserEntityService {

    private final UserEntityRepository userEntityRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserEntityMapper userEntityMapper;

    public UserEntityService(UserEntityRepository userEntityRepository, PasswordEncoder passwordEncoder, UserEntityMapper userEntityMapper) {
        this.userEntityRepository = userEntityRepository;
        this.passwordEncoder = passwordEncoder;
        this.userEntityMapper = userEntityMapper;
    }

    public UserEntity register(UserRegistrationDTO userRegistrationDTO) {
        //deba ne usppqh da go mapna po edin mnogo qk nachin, nishto shte e balushkata
        // UserEntity newUser = this.userEntityMapper.userRegistrationDtoToUserEntity(userRegistrationDTO);

        UserEntity newUser = new UserEntity(
                userRegistrationDTO.getEmail(),
                userRegistrationDTO.getUsername(),
                passwordEncoder.encode(userRegistrationDTO.getPassword())
        );

        this.userEntityRepository.save(newUser);
        return newUser;
    }
}
