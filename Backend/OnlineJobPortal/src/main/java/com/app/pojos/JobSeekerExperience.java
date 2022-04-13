package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//embedddable bcoz without job seeker experience dtls not have any existence
@NoArgsConstructor
@AllArgsConstructor
@Data
@Embeddable
public class JobSeekerExperience {

		@Column(length=30)
		private String designation;
		@Column(length=30)
		private String company;
		@Column(name="is_current_compony")
		private boolean isCurrentCompany;
		@Column(name="current_salary")
		private double currentSalary;
		@Column(name="job_description",length=200)
		private String jobDescription;
		@Column(name = "start_date")
		private LocalDate startDate;
		@Column(name = "end_date")
		private LocalDate endDate;
	
}
