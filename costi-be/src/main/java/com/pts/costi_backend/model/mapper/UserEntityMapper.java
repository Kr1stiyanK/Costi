package com.pts.costi_backend.model.mapper;

import com.pts.costi_backend.model.UserEntity;
import com.pts.costi_backend.model.dtos.UserRegistrationDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserEntityMapper {

    @Mapping(target = "password",expression = "org.springframework.security.crypto.password.PasswordEncoder(new PasswordEncoder())")
    UserEntity userRegistrationDtoToUserEntity(UserRegistrationDTO userRegistrationDTO);
}
