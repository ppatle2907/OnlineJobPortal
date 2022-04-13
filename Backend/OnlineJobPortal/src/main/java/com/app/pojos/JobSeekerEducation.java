package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Data
public class JobSeekerEducation {
	// type(enum)
		@Enumerated(EnumType.STRING)
	@Column(name="education_type",length = 20)
	private EducationType educationType;
	@Column(name="university_name",length=100)
	private String universityName;
	@Column(name="institute_name",length=100)
	private String instituteName;
	@Column(name="passing_year")
	private int passingYear;
	private float percentage;
}
