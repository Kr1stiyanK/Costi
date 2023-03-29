package com.pts.costi_backend.model.validations;


import com.pts.costi_backend.model.repositories.UserEntityRepository;


import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueEmailAddressValidator implements ConstraintValidator<UniqueEmailAddress,String> {

    private final UserEntityRepository userEntityRepository;

    public UniqueEmailAddressValidator(UserEntityRepository userEntityRepository) {
        this.userEntityRepository = userEntityRepository;
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        return this.userEntityRepository.findUserEntityByEmail(value).isEmpty();
    }
}
