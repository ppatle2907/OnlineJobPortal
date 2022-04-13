package com.app.dto;

import java.time.LocalDate;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
//@AllArgsConstructor
@Data
public class Experience {

	private String designation;
	private String company;
	private boolean isCurrentCompany;
	private double currentSalary;
	private String jobDescription;
	private LocalDate startDate;
	private LocalDate endDate;
	
	public Experience(String designation, String company, boolean isCurrentCompany, double currentSalary,
			String jobDescription, LocalDate startDate, LocalDate endDate) {
		
		this.designation = designation;
		this.company = company;
		this.isCurrentCompany = isCurrentCompany;
		this.currentSalary = currentSalary;
		this.jobDescription = jobDescription;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	
	
}
