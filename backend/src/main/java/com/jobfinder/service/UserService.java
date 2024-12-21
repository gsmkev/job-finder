package com.jobfinder.service;

import com.jobfinder.dto.UserDTO;
import com.jobfinder.exception.backendException;

public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws backendException;
}
