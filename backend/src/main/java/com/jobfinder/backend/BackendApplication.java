package com.jobfinder.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.jobfinder.dto.AccountType;
import com.jobfinder.entity.User;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication(scanBasePackages = "com.jobfinder")
@EnableMongoRepositories(basePackages = "com.jobfinder.repository")
public class BackendApplication {

	public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().load();
		System.setProperty("env.MONGO_DATABASE", dotenv.get("MONGO_DATABASE"));
		System.setProperty("env.MONGO_USER", dotenv.get("MONGO_USER"));
		System.setProperty("env.MONGO_PASSWORD", dotenv.get("MONGO_PASSWORD"));
		System.setProperty("env.MONGO_CLUSTER", dotenv.get("MONGO_CLUSTER"));
        System.setProperty("env.GMAIL_USERNAME", dotenv.get("GMAIL_USERNAME"));
		System.setProperty("env.GMAIL_PASSWORD", dotenv.get("GMAIL_PASSWORD"));
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
    public CommandLineRunner initData(MongoTemplate mongoTemplate) {
        return args -> {
            if (!mongoTemplate.collectionExists("users")) {
                User user = new User();
                user.setName("Test User");
                user.setEmail("test@example.com");
                user.setPassword("password123");
                user.setAccountType(AccountType.APPLICANT);
                mongoTemplate.save(user);
            }
        };
    }

}
