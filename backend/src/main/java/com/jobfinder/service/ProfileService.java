package com.jobfinder.service;

import com.jobfinder.dto.ProfileDTO;
import com.jobfinder.exception.backendException;

public interface ProfileService {
    public Long createProfile(String email) throws backendException;
    public ProfileDTO getProfile(Long id) throws backendException;
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws backendException;
}
