package com.jobfinder.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobfinder.dto.ProfileDTO;
import com.jobfinder.entity.Profile;
import com.jobfinder.exception.backendException;
import com.jobfinder.utility.Utils;
import com.jobfinder.repository.ProfileRepository;

@Service("profileService")
public class DefaultProfileService implements ProfileService {
    
    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Long createProfile(String email) throws backendException {
        Profile profile = new Profile();
        profile.setId(Utils.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperiences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());
        profile = profileRepository.save(profile);
        return profile.getId();
    }

    @Override
    public ProfileDTO getProfile(Long id) throws backendException {
        return profileRepository.findById(id).orElseThrow(() -> new backendException("PROFILE_NOT_FOUND")
        ).toDTO();
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws backendException {
        profileRepository.findById(profileDTO.getId()).orElseThrow(() -> new backendException("PROFILE_NOT_FOUND")
        ).toDTO();
        profileRepository.save(profileDTO.toEntity());
        return profileDTO;
    }

}
