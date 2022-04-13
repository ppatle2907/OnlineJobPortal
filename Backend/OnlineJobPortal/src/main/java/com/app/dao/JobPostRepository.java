package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.JobPost;

@Repository
public interface JobPostRepository extends JpaRepository<JobPost, Integer> {

	
	  @Query("select j from JobPost j where j.jobLocationId.city.id=:cityId")
	  List<JobPost> findByJobLocation(@Param("cityId")int cityId);
	  
	  //@Query("select j from JobPost j order by j.createdDate desc limit 5",nativeQuery = true)
	  @Query(value = "CALL default_jobs(:num);", nativeQuery = true)
	  List<JobPost>	findByCreatedDate(@Param("num")int num);
	  
	  @Query(nativeQuery = true, value = "SELECT * FROM job_post_tbl j ORDER BY created_date DESC LIMIT :num")
	  List<JobPost> getLatestJobs(@Param("num")int num);
	  
	  @Query("select j from JobPost j where j.jobTypeId.id=:jobType")
	  List<JobPost> findByJobType(@Param("jobType")int jobType);
	  
	  @Query("select j from JobPost j where j.componyId.companyId=:id")
	  List<JobPost> findByComponyId(@Param("id") int id);
	  
	 
}
