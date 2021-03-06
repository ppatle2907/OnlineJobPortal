package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CompanyRegistration;
import com.app.dto.JobPostDto;
import com.app.services.ICompanyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/company")
public class CompanyController {

//	Company functionalities :
//		1. login
//		2. Register
//		3. post job

	// injection dependency
	@Autowired
	private ICompanyService companyService;


	// add a request handling method to add company details
	@PostMapping("/register")
	public String registerCompany(@RequestBody CompanyRegistration register) // de-marshelled : json to java convert and
																				// store into JobSeekerRegistration
																				// object to trnasfer between other
																				// layers
	{
		System.out.println("in companyController : " + register);
		return companyService.companyRegistration(register);

	}

	// add a method to post job BY COMPANY ID
	@PostMapping("/postjob/{id}")
	public ResponseEntity<?> postJob(@RequestBody JobPostDto jobPost, @PathVariable int id) {
	
		companyService.jobPost(jobPost, id);
		return new ResponseEntity<>("job post added successfully", HttpStatus.OK);
	}

	// get job post by company Id
	@GetMapping("/postjob/{id}")
	public ResponseEntity<?> getPosteJob(@PathVariable int id) {
	
		return new ResponseEntity<>(companyService.getAllPostedJobs(id), HttpStatus.OK);
	}
	
	//get all jobseeekers mail id to send email notification after posting the job
	@GetMapping("/email")
	public ResponseEntity<?> getEmail() {
		return new ResponseEntity<>(companyService.getEmail(), HttpStatus.OK);
	}
	
	//get company Details by id
	@GetMapping("/{id}")
	public ResponseEntity<?> getCompanyDetails(@PathVariable int id) {
	
		return new ResponseEntity<>(companyService.getCompany(id), HttpStatus.OK);
	}
	
	//get all jobSeeker applied for particular jobs
	@GetMapping("/appliedJobs/{id}")
	public ResponseEntity<?> getAllAppliedJobSeeker(@PathVariable int id) {
	
		return new ResponseEntity<>(companyService.getAllJobSeekers(id), HttpStatus.OK);
	}
	
}