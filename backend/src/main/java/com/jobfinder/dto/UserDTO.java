package com.jobfinder.dto;

import com.jobfinder.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    @NotBlank(message = "{user.name.blank}")
    private String name;
    @NotBlank(message = "{user.email.blank}")
    @Email(message = "{user.email.invalid}")
    private String email;
    @NotBlank(message = "{user.password.blank}")
    @Pattern(
        regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.@$!%*?&#])[A-Za-z\\d.@$!%*?&#]{8,15}$",
        message = "{user.password.invalid}"
    )
    private String password;
    @NotNull(message = "{user.accountType.null}")
    private AccountType accountType;

    public User toEntity() {
        User user = new User();
        user.setId(id);
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        user.setAccountType(accountType);
        return user;
    }
}
