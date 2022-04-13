package com.app.services;

import java.util.ArrayList;
import java.util.List;

import com.app.dto.Education;
import com.app.dto.Experience;
import com.app.dto.JobPostResponse;
import com.app.dto.JobSeekerMultipleSkills;
import com.app.dto.JobSeekerRegistration;
import com.app.dto.JobSeekerSkill;
import com.app.dto.JobSeekerUpdateDTO;
import com.app.dto.SearchDTO;
import com.app.pojos.City;
import com.app.pojos.JobPost;
import com.app.pojos.JobPostRequiredSkillSets;
import com.app.pojos.JobSeeker;
import com.app.pojos.JobSeekerEducation;
import com.app.pojos.JobSeekerExperience;
import com.app.pojos.JobSeekerSkillSets;

public interface IJobSeekerService {
	//add a method to register jobSeeker
	String JobSeekerRegistration(JobSeekerRegistration register);

	void deleteJobSeeker(int id);
	
	//add a method to get all jobseeker details 
	public List<JobSeeker> getAllJobSeeker();
	//add a method to get Education details 
	List<JobSeekerEducation> getEducation(int id);
	//add helper method in jobseeker pojo to get education details
	
	//get jobseeker details
	JobSeeker getJobSeeker(int id);

	//add a method to add/update education details
	void addOrUpdateEducation(Education education, int id);

	void addOrUpdateExperience(Experience e, int id);

	List<JobSeekerExperience> getExperience(int id);

	void addSkill(JobSeekerSkill skill, int id);	

	List<JobSeekerSkillSets> getAllJobSeekerSkills(int id);

	String applyToJob(int jobSeekerId, int jobPostId);

	//List<JobSeekerAppliedJobs> getAllJobs(int id);
	List<JobPostResponse> getAllJobs(int id);

	List<JobPost> searchByCityId(int cityId);
	List<JobPostRequiredSkillSets> searchBySkillId(int skillId);
	String addMultipleSkills(JobSeekerMultipleSkills skills, int id);
	String updateJobSeekerInfo(JobSeekerUpdateDTO jobseeker, int id);
	List<JobPost> getJobList(ArrayList<Integer> skills);
	List<JobPost> getLatestJobs();
	List<JobPost> getJobListByCityAndSkills(ArrayList<Integer> skills, int cityId);
	List<JobPost> searchByJobType(int jobType);
	City findCity(int cityId);
	List<JobPost> searching(SearchDTO search);
}
