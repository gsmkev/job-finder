package com.jobfinder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobfinder.entity.Profile;

public interface ProfileRepository extends MongoRepository<Profile, Long> {
    
}
