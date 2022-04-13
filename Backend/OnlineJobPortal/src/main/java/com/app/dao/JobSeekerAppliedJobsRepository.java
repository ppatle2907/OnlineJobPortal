package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.JobSeeker;
import com.app.pojos.JobSeekerAppliedJobs;
@Repository
public interface JobSeekerAppliedJobsRepository extends JpaRepository<JobSeekerAppliedJobs, Integer>{

	@Query("select j from JobSeekerAppliedJobs j where j.jobSeeker = :id")
	List<JobSeekerAppliedJobs> findByJobSeekerId(JobSeeker id);
	
	//get all jobseeker applied for particualr job 
	@Query("select j.jobSeeker from JobSeekerAppliedJobs j where j.jobPost.id = :id")
	List<JobSeeker> findByjobPostId(@Param("id") int id);
	
}
