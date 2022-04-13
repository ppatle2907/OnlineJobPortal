package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="job_seeker_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobSeeker {
	
	@Id			//primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //for auto generation
	@Column(name="job_seeker_id")
	private Integer jobSeekerId; //pk  ---> 
	//@NotEmpty(message ="First Name can't be blank")
//	@Length(min = 4,max=25,message = "Invalid First Name length!!!!")
	@Column(name="first_name",length=30)
	private String firstName;
	
	//@NotEmpty(message ="Last Name can't be blank")
//	@Length(min = 4,max=25,message = "Invalid Last Name length!!!!")	
	@Column(name="last_name",length=30)
	private String lastName;
//	@EnumNamePattern(regexp = "MALE|FEMALE")	
	private Gender gender;
	//@NotEmpty(message ="DOB can't be blank")
	private LocalDate dob;
	
	//@NotEmpty(message ="street can't be blank")
//	@Length(min = 4,max=60,message = "Invalid street length!!!!")
	@Column(length=60)
	private String street;
	
	//@NotEmpty(message ="house number can't be blank")
//	@Length(min = 4,max=60,message = "Invalid house Number length!!!!")
	@Column(length=60,name="house_number")
	private String houseNumber;
	//@NotEmpty(message ="pincode can't be blank")
	private int pincode;
	//@NotEmpty(message ="country can't be blank")
	@Column(length=30)
	private String country;
	//many job_seeker can have 1 city
	//@NotEmpty(message ="city can't be blank")
	@ManyToOne
	@JoinColumn(name="city_id",nullable = false)
	private City city;
	
	@CreationTimestamp
	private LocalDate creationDate;
	
	@Column(length=64,name="profile_photo")
	private String profilePhoto;
	//private byte[] resumePdf;
	
	//Login Details(1) <----------  (1)JobSeeker
	//one to one : cascade , and give access permission like 	@JsonProperty(access = Access.WRITE_ONLY)
	
	@OneToOne
	@JoinColumn(name="login_id",nullable=false)
	@MapsId
	private LoginDetails loginId;

	public JobSeeker(String firstName, String lastName, Gender gender, LocalDate dob, String houseNumber,
			String street, int pincode, City city, LoginDetails savedJobSeekerLogin) {
		this.firstName=firstName;
		this.lastName=lastName;
		this.gender=gender;
		this.dob=dob;
		this.houseNumber=houseNumber;
		this.street=street;
		this.pincode=pincode;
		this.city=city;
		this.loginId=savedJobSeekerLogin;
	}
	


	
	//1 job seeker has many edu details
	//embeddable for education details 
	
	@ElementCollection(fetch = FetchType.EAGER) //eagerly fecth data
	@JsonIgnore  //to ignored the json data while fetching
	@CollectionTable(name="job_seeker_education",joinColumns = @JoinColumn(name="job_seeker_id"))
	@Column(length=20)
	private List<JobSeekerEducation> educationDetails= new ArrayList<JobSeekerEducation>();
	
	
	
	//jobseeker has experience details
	//1 jobseekr --- many exp details
	@ElementCollection
	//@JsonIgnore
	@CollectionTable(name="job_seeker_experience",joinColumns = @JoinColumn(name="job_seeker_id"))
	@Column(length=20)
	private List<JobSeekerExperience> experienceDetails= new ArrayList<JobSeekerExperience>();
	
	
	//add a constructor to store firstName and lastName from registartion to JobSeeker table
	public JobSeeker(String firstName, String lastName,LoginDetails loginId) {
		this.firstName=firstName;
		this.lastName=lastName;
		this.loginId=loginId;
	}

	//to add a profile details
	public JobSeeker(Gender gender, LocalDate dob) {
			this.gender=gender;
			this.dob=dob;
	}
	
	//add a helper function to get eductaion details
	public List<JobSeekerEducation> getAllEducation(){
		return this.educationDetails;
	}
	
	public void addEducation(JobSeekerEducation j){
		 this.educationDetails.add(j);
	}

	public List<JobSeekerExperience> getAllExperince() {
		this.experienceDetails.size(); //exp is lazily fetch , so due to .size() it will fetch and we can return exp details
		return this.experienceDetails;
	}


}
