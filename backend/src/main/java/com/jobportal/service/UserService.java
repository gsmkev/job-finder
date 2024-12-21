package com.jobportal.service;

import com.jobportal.dto.UserDTO;
import com.jobportal.exception.backendException;

public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws backendException;
}
