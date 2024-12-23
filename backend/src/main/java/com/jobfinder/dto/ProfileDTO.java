package com.jobfinder.dto;

import java.util.List;

import org.springframework.data.annotation.Id;

import com.jobfinder.entity.Profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileDTO {
    @Id
    private Long id;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private List<String> skills;
    private List<Experience> experiences;
    private List<Certification> certifications;

    public Profile toEntity() {
        Profile profile = new Profile();
        profile.setId(this.id);
        profile.setEmail(this.email);
        profile.setJobTitle(this.jobTitle);
        profile.setCompany(this.company);
        profile.setLocation(this.location);
        profile.setAbout(this.about);
        profile.setSkills(this.skills);
        profile.setExperiences(this.experiences);
        profile.setCertifications(this.certifications);
        return profile;
    }
}
