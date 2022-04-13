package com.app.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.JobPost;
import com.app.pojos.JobPostRequiredSkillSets;

@Repository
public interface JobPostRequiredSkillSetsRepository extends JpaRepository<JobPostRequiredSkillSets, Integer> {

		
	@Query("select s from JobPostRequiredSkillSets s where s.skillSetID.id=:skillId")
	List<JobPostRequiredSkillSets> findBySkillName(@Param("skillId") int skillId);
	
	//to get jobList by multiple ids
	@Query("select j.jobPostID from JobPostRequiredSkillSets j where j.skillSetID.id in :skills")
	List<JobPost> findBySkillSetIDIn(@Param("skills") ArrayList<Integer> skills);
	

}
