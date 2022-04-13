package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.JobLocation;
@Repository
public interface JobLocationRepository extends JpaRepository<JobLocation, Integer> {

}
