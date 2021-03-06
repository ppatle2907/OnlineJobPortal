package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Company;
import com.app.pojos.JobLocation;
import com.app.pojos.JobType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobPostResponse {	
	private LocalDate createdDate;
	private boolean isActive;
	private String jobTitle;
	private JobType jobTypeId;
	private JobLocation jobLocationId;
	private Company componyId;
	
}
