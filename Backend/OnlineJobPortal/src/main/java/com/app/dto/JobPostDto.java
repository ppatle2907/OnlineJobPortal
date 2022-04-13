package com.app.dto;

import com.app.pojos.JobTypeEnum;
import com.app.pojos.SkillType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobPostDto {
	
	private String jobTitle;
	private String jobDescription;
	private JobTypeEnum jobType;
	private String streetAddress;
	private String country;
	private int pincode;
	private String city;
	private SkillType skillName;
	private double jobExperience;
	
	/*
	 * { "jobTitle":"Full Stack Devloper",
	 * "jobDescription":"Becoming a full stack developer is actually pretty straightforward. Read this guide to learn what it takes to get hired."
	 * , "jobType":"IT", "streetAddress":"Guruduatta Chowk,cido", "pincode":422009,
	 * "city":"Nashik", "skillLevel":"Medium", "SkillName":"JAVA", "jobExperience":4
	 * }
	 */
	
	
	
}
