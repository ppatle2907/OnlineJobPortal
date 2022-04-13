package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.JobSeeker;
import com.app.pojos.JobSeekerSkillSets;
@Repository
public interface JobSeekerSkillSetsRepository extends JpaRepository<JobSeekerSkillSets, Integer> {
	@Query("select j from JobSeekerSkillSets j where j.jobSeekerId = :id")
	List<JobSeekerSkillSets> findByJobSeekerId(JobSeeker id);
}
