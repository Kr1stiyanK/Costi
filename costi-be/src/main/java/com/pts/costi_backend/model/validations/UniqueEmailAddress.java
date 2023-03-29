package com.pts.costi_backend.model.validations;


import javax.validation.*;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.Field;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
@Constraint(validatedBy = UniqueEmailAddressValidator.class)
public @interface UniqueEmailAddress {

    String message() default "Email is already taken!";

    Class<?>[] groups() default  {};

    Class<? extends Payload[]>[] payload() default {};
}
