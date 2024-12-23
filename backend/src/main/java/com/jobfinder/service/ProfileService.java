package com.jobfinder.service;

import com.jobfinder.exception.backendException;

public interface ProfileService {
    public Long createProfile(String email) throws backendException;
}
