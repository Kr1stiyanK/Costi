package com.pts.costi_backend.model.repositories;

import com.pts.costi_backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserEntityRepository extends JpaRepository<UserEntity,Integer> {

    Optional<UserEntity> findUserEntityByUsername(String username);


    Optional<UserEntity> findUserEntityByEmail(String email);
}
