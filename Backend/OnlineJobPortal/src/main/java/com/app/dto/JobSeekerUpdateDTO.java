package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobSeekerUpdateDTO {
	private String firstName;
	private String lastName;
	private Gender gender;
	private LocalDate dob;
	private String street;
	private String houseNumber;
	private int pincode;
	private String city;
	/*
	 * { "firstName":"Sunanda", "lastName":"Yeolekar", "gender":"FEMALE",
	 * "dob":"1966-06-18", "street":"gurudatta chowk", "houseNumber":"plat no 89"
	 * "pincode":"456213", "city":"Pune" }
	 */
}
