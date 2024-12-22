package com.jobfinder.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobfinder.entity.OTP;

@Repository
public interface OTPRepository extends MongoRepository<OTP, String> {
    
    public Optional<OTP> findOTPByEmail(String email);
}
