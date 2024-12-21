package com.jobportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.dto.UserDTO;
import com.jobportal.entity.User;
import com.jobportal.exception.backendException;
import com.jobportal.repository.UserRepository;
import com.jobportal.utility.Utils;

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
