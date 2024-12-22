package com.jobfinder.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobfinder.dto.LoginDTO;
import com.jobfinder.dto.ResponseDTO;
import com.jobfinder.dto.UserDTO;
import com.jobfinder.entity.OTP;
import com.jobfinder.entity.User;
import com.jobfinder.exception.backendException;
import com.jobfinder.repository.OTPRepository;
import com.jobfinder.repository.UserRepository;
import com.jobfinder.utility.Data;
import com.jobfinder.utility.Utils;

import jakarta.mail.internet.MimeMessage;

@Service(value = "userService")
public class DefaultUserService implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws backendException {
        Optional<User> userOptional = userRepository.findUserByEmail(userDTO.getEmail());
        if (userOptional.isPresent()) {
            throw new backendException("USER_EMAIL_EXISTS");
        }
        userDTO.setId(Utils.getNextSequence("users"));
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();
    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws backendException {
        User user = userRepository
            .findUserByEmail(loginDTO.getEmail())
            .orElseThrow(() -> new backendException("USER_NOT_FOUND"));
        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new backendException("INVALID_CREDENTIALS");
        }

        return user.toDTO();
    }

    @Override
    public Boolean sendOTP(String email) throws Exception {
        try {
            User user = userRepository
                .findUserByEmail(email)
                .orElseThrow(() -> new backendException("USER_NOT_FOUND"));
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(email);
            helper.setSubject("Yout OTP for JobFinder");
            OTP otp = new OTP(email, Utils.generateOTP(), LocalDateTime.now());
            otpRepository.save(otp);
            helper.setText(Data.getMessageBody(otp.getOTP(), user.getName()), true);
            javaMailSender.send(message);
            return true;
        } catch (Exception e) {
            throw new Exception("Failed to send OTP: " + e.getMessage());
        }
    }

    @Override
    public Boolean verifyOTP(String email, String otp) throws backendException {
        OTP otpEntity = otpRepository
            .findById(email)
            .orElseThrow(() -> new backendException("OTP_NOT_FOUND"));
        if (!otpEntity.getOTP().equals(otp)) {
            throw new backendException("OTP_INCORRECT");
        }
        otpRepository.delete(otpEntity);
        return true;
    }

    @Override
    public ResponseDTO changePassword(LoginDTO loginDTO) throws backendException {
        User user = userRepository
            .findUserByEmail(loginDTO.getEmail())
            .orElseThrow(() -> new backendException("USER_NOT_FOUND"));
        user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
        userRepository.save(user);
        return new ResponseDTO("Password changed successfully");
    }

    @Scheduled(fixedRate = 6000)
    public void removeExpiredOTP() {
        List<OTP> expiredOTP = otpRepository.findByCreatedAtBefore(LocalDateTime.now().minusMinutes(5));
        otpRepository.deleteAll(expiredOTP);
        if (!expiredOTP.isEmpty()) {
            otpRepository.deleteAll(expiredOTP);
            System.out.printf("Removed %d expired OTPs", expiredOTP.size());
        }
    }
}
