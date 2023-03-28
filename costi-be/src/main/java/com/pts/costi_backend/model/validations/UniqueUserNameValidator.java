package com.pts.costi_backend.model.validations;

import com.pts.costi_backend.model.repositories.UserEntityRepository;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueUserNameValidator implements ConstraintValidator<UniqueUserName, String> {

    private final UserEntityRepository userEntityRepository;

    public UniqueUserNameValidator(UserEntityRepository userEntityRepository) {
        this.userEntityRepository = userEntityRepository;
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return this.userEntityRepository.findUserEntityByUsername(value).isEmpty();
    }
}
