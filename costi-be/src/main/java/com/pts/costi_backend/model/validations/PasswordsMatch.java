package com.pts.costi_backend.model.validations;

import javax.validation.Constraint;
import javax.validation.Payload;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Constraint(validatedBy = PasswordsMatchValidator.class)
public @interface PasswordsMatch {

    String firstMatch();

    String secondMatch();

    String message() default "Passwords should match!";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
