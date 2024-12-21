package com.jobfinder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobfinder.dto.UserDTO;
import com.jobfinder.entity.User;
import com.jobfinder.exception.backendException;
import com.jobfinder.repository.UserRepository;
import com.jobfinder.utility.Utils;

@Service(value = "userService")
public class DefaultUserService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws backendException {
        userDTO.setId(Utils.getNextSequence("users"));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();
    }

}
