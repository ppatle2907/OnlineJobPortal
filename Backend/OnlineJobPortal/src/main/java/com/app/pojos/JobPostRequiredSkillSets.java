package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "job_post_skill_sets")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobPostRequiredSkillSets {

	public JobPostRequiredSkillSets(JobPost post, SkillSets skills) {
		this.jobPostID=post;
		this.skillSetID=skills;
	}
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // for auto generation
	@Column(name = "id")
	private Integer id; // pk --->

	// job_post_id --> fk
	// 1 job post --- many skillsets
	@ManyToOne
	@JoinColumn(name = "job_post_id", nullable = false)
	private JobPost jobPostID;

	@ManyToOne
	@JoinColumn(name = "skill_set_id", nullable = false)
	private SkillSets skillSetID;
}
