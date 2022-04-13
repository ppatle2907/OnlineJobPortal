package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "job_seeker_skill_sets_tbl")
public class JobSeekerSkillSets {

	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // for auto generation
	@Column(name = "id")
	private Integer id; // pk --->

	// one jobseeker can have many skillsets
	// jobSeeker(1) ----- (many) skillsets
	@ManyToOne(fetch=FetchType.LAZY)
	@JsonIgnore
	@JoinColumn(name = "job_seeker_id", nullable = false)
	private JobSeeker jobSeekerId;

	// many job_seeker_skillsets have 1 skillset
	@ManyToOne
	//@JsonIgnore
	@JoinColumn(name = "skill_set_id", nullable = false)
	private SkillSets skillSetID;

	//private String skillLevel;

	public JobSeekerSkillSets(JobSeeker jobseeker, SkillSets skillset) {
		this.jobSeekerId = jobseeker;
		this.skillSetID = skillset;
	}

}
