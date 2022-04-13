package com.app.services;

import java.util.List;

import com.app.dto.CompanyRegistration;
import com.app.dto.JobPostDto;
import com.app.pojos.Company;
import com.app.pojos.JobPost;
import com.app.pojos.JobSeeker;

public interface ICompanyService {
	//add a method to add Company details
	String companyRegistration(CompanyRegistration register);
	
	//add a method to post job
	String jobPost(JobPostDto jobPost, int id);
	
	//get all jobs posted by the company
	List<JobPost> getAllPostedJobs(int id);
	//get all jobSeekers mail
	List<String> getEmail();
	//get company details
	Company getCompany(int id);
	//get all jobSeekers details applied for a particular job
	List<JobSeeker> getAllJobSeekers(int id);

}
