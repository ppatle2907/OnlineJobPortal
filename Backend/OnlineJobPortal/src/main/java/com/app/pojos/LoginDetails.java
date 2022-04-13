package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="login_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginDetails {


	@Id			//primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //for auto generation
	@Column(name="login_id")
	private Integer loginId;
	@Column(length=255,unique=true)
	private String username;
	@Column(length=255)
	private String password;
	@Column(length=255,unique=true,name="email_id")
	private String emailId;
	@Column(length=10,unique=true,name="phone_number")
	private String phoneNumber;
	
	//roleId as a forigen key
	//Role(1) <--------------  *LoginDetails
	//many users can have only 1 role
	//1 user have 1 role and many users can have 1 role
	@ManyToOne
	@JoinColumn(name="role_id",nullable = false)
	private Role role;
	
	
	//create a constructor to store login details
	public LoginDetails(String emailId, String password, String phoneNumber,String username,Role role) {
		this.emailId=emailId;
		this.password=password;
		this.phoneNumber=phoneNumber;
		this.username=username;	
		this.role=role;
	}

}
