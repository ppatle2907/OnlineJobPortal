package com.app.services;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CityRepository;
import com.app.dao.ICompanyRepository;
import com.app.dao.JobLocationRepository;
import com.app.dao.JobPostRepository;
import com.app.dao.JobPostRequiredSkillSetsRepository;
import com.app.dao.JobSeekerAppliedJobsRepository;
import com.app.dao.JobTypeRepository;
import com.app.dao.LoginRepository;
import com.app.dao.RoleRepository;
import com.app.dao.SkillSetRepository;
import com.app.dto.CompanyRegistration;
import com.app.dto.JobPostDto;
import com.app.pojos.City;
import com.app.pojos.Company;
import com.app.pojos.JobLocation;
import com.app.pojos.JobPost;
import com.app.pojos.JobPostRequiredSkillSets;
import com.app.pojos.JobSeeker;
import com.app.pojos.JobType;
import com.app.pojos.LoginDetails;
import com.app.pojos.Role;
import com.app.pojos.SkillSets;

@Service // tells spring container that it is bean , craete it's dependecy(instance) at
			// app deploy time(i.e when we start the app at that time)
@Transactional
public class CompanyServiceImpl implements ICompanyService {

	// dependency injection
	@Autowired
	private ICompanyRepository companyRepo;
	@Autowired
	private LoginRepository loginRepo;
	@Autowired
	private RoleRepository roleRepo;
	@Autowired
	private JobPostRepository jobPostRepo;
	@Autowired
	private JobTypeRepository jobTypeRepo;
	@Autowired
	private CityRepository cityRepo;
	@Autowired
	private JobLocationRepository jobLocationRepo;
	@Autowired
	private SkillSetRepository skillSetRepo;
	@Autowired
	private JobPostRequiredSkillSetsRepository jobPostRequiredSkillsRepo;
	@Autowired
	private EmailSenderService emailService;
	@Autowired
	private JobSeekerAppliedJobsRepository jobSeekerAppliedJobsRepo;

	@Override
	public String companyRegistration(CompanyRegistration register) {
		System.out.println("in company service: ");
		// check Company is already exist or not , by using emailId
		if (loginRepo.findByEmailId(register.getEmailId()) != null)
			throw new RuntimeException("Company already registered....");
		// find role by roleid of company:3
		Role role = roleRepo.findById(3).orElseThrow(() -> new RuntimeException("Role Not Found!!"));
		// if control goes here means company not exist(i.e.new company) and we can
		// store Compnay details in database

		LoginDetails companyLoginDetails = new LoginDetails(register.getEmailId(), register.getPassword(),
				register.getPhoneNumber(), register.getUsername(), role);
		// store login deatils in login table
		LoginDetails savedcompanyLoginDetails = loginRepo.save(companyLoginDetails);

		Company newCompany = new Company(register.getCompanyName(), register.getYearOfEastablish(),
				register.getCompanyURL(), register.getCompanyDescription(), savedcompanyLoginDetails);
		// store company Deatils in company table
		companyRepo.save(newCompany);
		// after registration send mail to company
		emailService.sendMailToUser(register.getEmailId(), register.getCompanyName() + " Welcome to Online Job Portal",
				"Find Perfect Candidate for your company");

		return "Registration SuccessFully!!!!!!";
	}

	// job post method
	@Override
	public String jobPost(JobPostDto jobPost, int id) {
		// check company by id , if company present then add job
		Company company = companyRepo.findById(id).orElseThrow(() -> new RuntimeException("compnay not found!!!"));
		System.out.println("Skill Name: " + jobPost.getSkillName());
		// get skillset id by skillname
		SkillSets skills = skillSetRepo.findBySkillType(jobPost.getSkillName());
		System.out.println(skills);
		// get city Id by city Name
		City city = cityRepo.findByCityName(jobPost.getCity());
		// create a jobLocation and set joblocation
		JobLocation jobLocation = new JobLocation(jobPost.getStreetAddress(), jobPost.getPincode(), city);
		jobLocationRepo.save(jobLocation);
		// find jobtype id by jobtype
		JobType jobType = jobTypeRepo.findByJobtypes(jobPost.getJobType());
		// create jobPost object
		JobPost post = new JobPost(LocalDate.now(), jobPost.getJobTitle(), jobPost.getJobDescription(),
				jobPost.getJobExperience(), jobType, company, jobLocation);
		post.setJobLocationId(jobLocation);

		// post.setJobTypeId(null);
		jobPostRepo.save(post);
		// save details into jobPostRequired skills
		JobPostRequiredSkillSets jobPostSkills = new JobPostRequiredSkillSets(post, skills);
		jobPostRequiredSkillsRepo.save(jobPostSkills);
		Role role = roleRepo.findById(2).orElseThrow(() -> new RuntimeException("Role Not Found!!"));
		//get all jobSeekers mail
		List<String> list = loginRepo.getEmailIDByRole(2);
		// Converting above List to array using toArray()
		// method and storing it in an string array
		String[] allJobSeekerMailIds = list.toArray(new String[list.size()]);
		System.out.println(allJobSeekerMailIds);
		// after registration send mail to company
		emailService.sendMailToMultiUsers(allJobSeekerMailIds,
				company.getCompanyName() + " posted job for" + " " + jobPost.getJobTitle()
						+ " Kindly visit the Online job Portal " + "link : " + "http://localhost:3000/",
				"Find Your Dream Job ");
		return "job post successfully!!!";
	}

	//get all jobs posted by the company
	@Override
	public List<JobPost> getAllPostedJobs(int id) {
		// check company by id , if company present then add job
		System.out.println("in getAllPostedJobs");
		Company company = companyRepo.findById(id).orElseThrow(() -> new RuntimeException("compnay not found!!!"));
		return jobPostRepo.findByComponyId(id);
		
	}

	//get all jobSeekers mail
	@Override
	public List<String> getEmail() {
		List<String> list = loginRepo.getEmailIDByRole(2);
		return list;
	}
	
	//get company details
	@Override
	public Company getCompany(int id) {
		return companyRepo.findById(id).orElseThrow(() -> new RuntimeException("compnay not found!!!"));
	}

	//get all jobSeekers details applied for a particular job
	@Override
	public List<JobSeeker> getAllJobSeekers(int id) {
		System.out.println("in getAllJobSeekers");
		List<JobSeeker> jobseeker = jobSeekerAppliedJobsRepo.findByjobPostId(id);
		for (JobSeeker j : jobseeker)
			j.getExperienceDetails().size();
		return jobseeker;
	}

}
