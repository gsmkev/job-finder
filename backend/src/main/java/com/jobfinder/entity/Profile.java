package com.jobfinder.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.jobfinder.dto.Certification;
import com.jobfinder.dto.Experience;
import com.jobfinder.dto.ProfileDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "profiles")
public class Profile {
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
    
    public ProfileDTO toDTO() {
        ProfileDTO profileDTO = new ProfileDTO();
        profileDTO.setId(this.id);
        profileDTO.setEmail(this.email);
        profileDTO.setJobTitle(this.jobTitle);
        profileDTO.setCompany(this.company);
        profileDTO.setLocation(this.location);
        profileDTO.setAbout(this.about);
        profileDTO.setSkills(this.skills);
        profileDTO.setExperiences(this.experiences);
        profileDTO.setCertifications(this.certifications);
        return profileDTO;
    }
}
