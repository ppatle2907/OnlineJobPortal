package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CompanyRegistration {
	private String companyName;
	private int yearOfEastablish;
	private String companyURL;
	private String companyDescription;
	private String emailId;
	private String password;
	private String phoneNumber;
	private String username;
}
