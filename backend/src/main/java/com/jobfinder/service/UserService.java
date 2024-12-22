package com.jobfinder.service;

import com.jobfinder.dto.LoginDTO;
import com.jobfinder.dto.UserDTO;
import com.jobfinder.exception.backendException;

public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws backendException;

    public UserDTO loginUser(LoginDTO loginDTO) throws backendException;

    public Boolean sendOTP(String email) throws Exception;
}
