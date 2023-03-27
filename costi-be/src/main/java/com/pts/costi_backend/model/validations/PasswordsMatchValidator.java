package com.pts.costi_backend.model.validations;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.PropertyAccessorFactory;

public class PasswordsMatchValidator implements ConstraintValidator<PasswordsMatch,Object> {

    private String firstMatch;

    private String secondMatch;

    private String message;

    @Override
    public void initialize(PasswordsMatch constraintAnnotation){
        this.firstMatch = constraintAnnotation.firstMatch();
        this.secondMatch = constraintAnnotation.secondMatch();
        this.message = constraintAnnotation.message();

    }

    @Override
    public boolean isValid(Object value, ConstraintValidatorContext context) {
        BeanWrapper beanWrapper = PropertyAccessorFactory.forBeanPropertyAccess(value);

        Object firstValue = beanWrapper.getPropertyValue(this.firstMatch);
        Object secondValue = beanWrapper.getPropertyValue(this.secondMatch);


        boolean isValid;

        if (firstValue == null){
            return secondValue == null;
        }else {
            isValid = firstValue.equals(secondValue);
        }


        // tova moje i da se mahne, zashototo e pisano za html poleta s thymeleaf
        if (!isValid){
            context.buildConstraintViolationWithTemplate(message)
                    .addPropertyNode(secondMatch)
                    .addConstraintViolation()
                    .disableDefaultConstraintViolation();
        }

        return isValid;
    }
}
