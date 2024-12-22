package com.jobfinder.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobfinder.entity.OTP;

@Repository
public interface OTPRepository extends MongoRepository<OTP, String> {
    
    List<OTP> findByCreatedAtBefore(LocalDateTime minusMinutes);

}
