package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "applied_job_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobSeekerAppliedJobs {

	

	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // for auto generation
	@Column(name = "id")
	private Integer id; // pk --->

	// 1 job seeker can apply for many jobs
	// job seeker(1)<---------(many)applied jobs
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "job_seeker_id", nullable = false)
	private JobSeeker jobSeeker; // fk

	// many job_seeker apply for 1 job_post
	@ManyToOne
	@JoinColumn(name = "job_post_id", nullable = false)
	private JobPost jobPost; // fk

	@Column(name = "apply_date")
	private LocalDate applyDate;
	
	
	public JobSeekerAppliedJobs(JobSeeker jobseeker, JobPost jobpost, LocalDate jobApplyDate) {
		this.jobSeeker=jobseeker;
		this.jobPost=jobpost;
		this.applyDate=jobApplyDate;
	}

}
