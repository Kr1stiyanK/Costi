package com.pts.costi_backend.model.services;

import com.pts.costi_backend.model.CostiPtsUserDetails;
import com.pts.costi_backend.model.UserEntity;
import com.pts.costi_backend.model.repositories.UserEntityRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserSecurityDetailsService implements UserDetailsService {

    private final UserEntityRepository userEntityRepository;

    public UserSecurityDetailsService(UserEntityRepository userEntityRepository) {
        this.userEntityRepository = userEntityRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserEntity> userEntity = this.userEntityRepository.findUserEntityByUsername(username);
        return userEntity.map(CostiPtsUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user with " + username + " not found!"));

//        return this.userEntityRepository.findUserEntityByUsername(username)
//                .map(this::mapToSecurityObject).orElseThrow(() -> new UsernameNotFoundException(username + " not found!"));
    }


//    private UserDetails mapToSecurityObject(UserEntity user) {
//        return new CostiPtsUserDetails(
//                user.getUsername(),
//                user.getPassword()
//        );
//    }


//  neshta za authorizaciq, no na nas nqma da ni trqbvat, mislq ....
//    private List<GrantedAuthority> extractAuthorities(User user){
//        return user.getRoles().stream().map(this::mapRole).collect(Collectors.toList());
//    }
//
//    private GrantedAuthority mapRole(Role role){
//        return new SimpleGrantedAuthority("ROLE_" + role.getName().name());
//    }
}
