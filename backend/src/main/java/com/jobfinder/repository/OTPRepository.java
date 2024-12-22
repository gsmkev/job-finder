package com.jobfinder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobfinder.entity.OTP;

public interface OTPRepository extends MongoRepository<OTP, String> {

}
