package com.app.dto;

import com.app.pojos.EducationType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Education {
	//private Integer jobSeekerId;
	private EducationType educationType;
	private String universityName;
	private String instituteName;
	private int passingYear;
	private float percentage;
}
