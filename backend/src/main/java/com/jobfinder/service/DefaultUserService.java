package com.jobfinder.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobfinder.dto.LoginDTO;
import com.jobfinder.dto.UserDTO;
import com.jobfinder.entity.User;
import com.jobfinder.exception.backendException;
import com.jobfinder.repository.UserRepository;
import com.jobfinder.utility.Utils;

@Service(value = "userService")
public class DefaultUserService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws backendException {
        Optional<User> userOptional = userRepository.findUserByEmail(userDTO.getEmail());
        if (userOptional.isPresent()) {
            throw new backendException("USER_EMAIL_EXISTS");
        }
        userDTO.setId(Utils.getNextSequence("users"));
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();
    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws backendException {
        User user = userRepository.findUserByEmail(loginDTO.getEmail()).orElseThrow(() -> new backendException("USER_NOT_FOUND"));
        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new backendException("INVALID_CREDENTIALS");
        }

        return user.toDTO();
    }
}
