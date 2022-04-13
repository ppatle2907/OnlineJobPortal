package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.JobType;
import com.app.pojos.JobTypeEnum;
@Repository
public interface JobTypeRepository extends JpaRepository<JobType,Integer>{

	JobType findByJobtypes(JobTypeEnum jobType);

}
