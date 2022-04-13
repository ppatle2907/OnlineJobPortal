package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="Company_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Company {
	
	@Id			//primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //for auto generation
	@Column(name="company_id")
	private Integer companyId; //pk  --->
	@Column(name="company_name")
	private String companyName;
	@Column(name="year_of_establish")
	private int yearOfEastablish;
	@Column(name="company_url")
	private String companyURL;
	@Column(name="company_description",length=1000)
	private String companyDescription;
	
	//company image
	//company subscription
	
	//company 1--->1 loginDetails
	@OneToOne
	@JoinColumn(name="login_id",nullable=false)
	@MapsId
	private LoginDetails loginId;
	
	// to store company registration details 
	public Company(String companyName,int yearOfEastablish,String  companyURL,String companyDescription,LoginDetails loginId)
	{
		this.companyName=companyName;
		this.yearOfEastablish=yearOfEastablish;
		this.companyURL=companyURL;
		this.companyDescription=companyDescription;
		this.loginId=loginId;
	}
}
