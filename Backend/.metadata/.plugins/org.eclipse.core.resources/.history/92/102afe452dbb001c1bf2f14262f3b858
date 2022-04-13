package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Education;
import com.app.dto.Experience;
import com.app.dto.JobApplicationDTO;
import com.app.dto.JobSeekerMultipleSkills;
import com.app.dto.JobSeekerRegistration;
import com.app.dto.JobSeekerSkill;
import com.app.dto.JobSeekerUpdateDTO;
import com.app.dto.SearchDTO;
import com.app.pojos.JobPost;
import com.app.services.IJobSeekerService;
import com.app.services.ILoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/jobseeker")
public class JobSeekerController {

	// ********************all Job Seeker functionalities************************
	// 1. Search for job : by city, by skillSets , by city + skillsets, by company
	// 2. Apply for job :
	// 3. upload resume
	// 4. update profile
	// 5. update/insert education details
	// 6. update/insert experience details
	// 7. update/insert skillSets
	// 8. upload profile photo
	// 9. Register -> 
	// 10. Login -> 
	// 11. Receive  email after registration
	// injection dependency
	@Autowired
	private IJobSeekerService jobSeekerService;

	@Autowired
	private ILoginService loginService;

	//jobSeeker Registration
	@PostMapping("/register")
	public ResponseEntity<?> registerJobSeeker(@RequestBody JobSeekerRegistration jobSeeker) {
		System.out.println("in JobSeekerController : " + jobSeeker);
		return new ResponseEntity<>(jobSeekerService.JobSeekerRegistration(jobSeeker), HttpStatus.OK);
	}


	
	
	// get jobSeeker details
	@GetMapping("/{id}")
	public ResponseEntity<?> getJobseekerDetails(@PathVariable int id) {
		System.out.println("In getJobseekerDetails");
		return new ResponseEntity<>(jobSeekerService.getJobSeeker(id), HttpStatus.OK);
	}

	// add a method to get all jobSeeker details
	@GetMapping("/details")
	public ResponseEntity<?> getAllJobSeekerDetails() {
		System.out.println("in getAllJobSeekerDetails : ");
		return new ResponseEntity<>(jobSeekerService.getAllJobSeeker(), HttpStatus.OK);
	}
	
	//update jobSeeker Details 
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateJobSeeker(@RequestBody JobSeekerUpdateDTO jobseeker,@PathVariable int id){
		return new ResponseEntity<>(jobSeekerService.updateJobSeekerInfo(jobseeker,id), HttpStatus.OK);		
	}


	// add a method to delete the job seeker details by id
	@DeleteMapping("/{id}")
	public String deleteJobSeeker(@PathVariable int id) {
		System.out.println("in delete job seeker details: ");

		// delete job seeker details and then login details
		jobSeekerService.deleteJobSeeker(id);
		loginService.deleteLoginDetails(id);
		return "Job seeker info deleted with id " + id;
	}

	//// //add a method to update/insert education details ////
	@PostMapping("/education/{id}")
	public ResponseEntity<?> addEducationDetails(@RequestBody Education education, @PathVariable int id) {
		System.out.println("In AddJobseekerDetails "+education);
		
		jobSeekerService.addOrUpdateEducation(education, id);
		return new ResponseEntity<>("education details added successfully", HttpStatus.OK);
	}

	// add a method to get education details
	@GetMapping("/education/{id}")
	public ResponseEntity<?> getEducationDetails(@PathVariable int id) {
		System.out.println("in jobseeker controller");
		return new ResponseEntity<>(jobSeekerService.getEducation(id), HttpStatus.OK);
	}

	// add a method insert/update the experience details
	@PostMapping("/exp/{id}")
	public ResponseEntity<?> addExperienceDetails(@RequestBody Experience e, @PathVariable int id) {
		System.out.println("IN jobsekker add expr : ");
		jobSeekerService.addOrUpdateExperience(e, id);
		return new ResponseEntity<>("experience details added successfully", HttpStatus.OK);
	}

	// add a method to get experience details
	@GetMapping("/exp/{id}")
	public ResponseEntity<?> getExperienceDetails(@PathVariable int id) {
		System.out.println("in jobseeker controller");
		return new ResponseEntity<>(jobSeekerService.getExperience(id), HttpStatus.OK);
	}

	// add a method to insert skillsets in jobseeker table
	@PostMapping("/skill/{id}")
	public ResponseEntity<?> addSkills(@RequestBody JobSeekerSkill skill, @PathVariable int id) {
		System.out.println("in jobseeker skillset");
		jobSeekerService.addSkill(skill, id);
		return new ResponseEntity<>("jobseeker skill added successfully", HttpStatus.OK);
	}
	
	// add multiple skills
	@PostMapping("/multiskill/{id}")
	public ResponseEntity<?> addMultipleSkills(@RequestBody JobSeekerMultipleSkills skills, @PathVariable int id) {
		System.out.println("in jobseeker skillset");
		jobSeekerService.addMultipleSkills(skills, id);
		return new ResponseEntity<>("jobseeker skill added successfully", HttpStatus.OK);

	}

	//get jobList by multiple skillSets
	@PostMapping("/multiskill")
	public ResponseEntity<?> getJobListByMultipleSkill(@RequestBody ArrayList<Integer> skills) {
		System.out.println("in jobseeker skillset search by multiskills");
		List<JobPost> jobList = jobSeekerService.getJobList(skills);
		return new ResponseEntity<>(jobList, HttpStatus.OK);
	}
	
	//searech by city + skillsets
		@PostMapping("/search/city-skills/{cityId}")
		public ResponseEntity<?> getJobListByCityAndSkills(@RequestBody ArrayList<Integer> skills,@PathVariable int cityId)
		//public ResponseEntity<?> getJobListByCityAndSkills(@RequestBody JobSeekerMultipleSkills skills,@PathVariable int cityId) 
		{
			System.out.println("Search by skillset and city");
			List<JobPost> jobList = jobSeekerService.getJobListByCityAndSkills(skills,cityId);
			return new ResponseEntity<>(jobList, HttpStatus.OK);
		}


//	
//	//method to get jobseeker skill sets
	@GetMapping("/skill/{id}")
	public ResponseEntity<?> getSkills(@PathVariable int id) {
		System.out.println("in jobseeker get skillset");
		return new ResponseEntity<>(jobSeekerService.getAllJobSeekerSkills(id), HttpStatus.OK);

	}
	
	// method to apply for jobs
	@PostMapping("/apply")
	public ResponseEntity<?> applyToJob(@RequestBody JobApplicationDTO jobApplication) {
		return new ResponseEntity<>(
				jobSeekerService.applyToJob(jobApplication.getJobSeekerId(), jobApplication.getJobPostId()),
				HttpStatus.OK);
	}

	// get All jobSeeker applied job Post
	@GetMapping("/apply/{id}")
	public ResponseEntity<?> getAllAppliedJobList(@PathVariable int id) {
		System.out.println("in jobseeker controller: ");
		return new ResponseEntity<>(jobSeekerService.getAllJobs(id), HttpStatus.OK);
	}

	/* ****************** All Searching Methods *************** */

	//search by skills
	@GetMapping("/search/skill/{skillId}")
	public ResponseEntity<?> searchBySkillSets(@PathVariable int skillId) {
		System.out.println("in search skills: ");
		return new ResponseEntity<>(jobSeekerService.searchBySkillId(skillId), HttpStatus.OK);
	}

	//search by city
	@GetMapping("/search/city/{cityId}")
	public ResponseEntity<?> searchByCity(@PathVariable int cityId) {
		System.out.println("in search by city: ");
		return new ResponseEntity<>(jobSeekerService.searchByCityId(cityId), HttpStatus.OK);
	}
	
	//search job by jobType
	@GetMapping("search/jobType/{jobType}")
	public ResponseEntity<?> searchByJobType(@PathVariable int jobType) {
		System.out.println("in search jobtype: ");
		return new ResponseEntity<>(jobSeekerService.searchByJobType(jobType), HttpStatus.OK);
	}
	
	//get latest first 10 jobs to show the home page
	@GetMapping("/deafult/jobs")
	public ResponseEntity<?> getLatestJObs()
	{
		return new ResponseEntity<>(jobSeekerService.getLatestJobs(), HttpStatus.OK);
	}
	
	//search job city
	@GetMapping("/city/{cityId}")
	public ResponseEntity<?> findCityById(@PathVariable int cityId)
	{
		return new ResponseEntity<>(jobSeekerService.findCity(cityId), HttpStatus.OK);
	}
	
	//searching jobs by skills and city
	@PostMapping("/search")
	public ResponseEntity<?> search(@RequestBody SearchDTO search) {
		System.out.println("in search : "+search);
		return new ResponseEntity<>(jobSeekerService.searching(search), HttpStatus.OK);
	}

}
