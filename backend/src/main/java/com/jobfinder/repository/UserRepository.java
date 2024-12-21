package com.jobfinder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobfinder.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {
    
}
