package com.app.services;

import java.util.List;

import com.app.pojos.LoginDetails;

public interface ILoginService {
	LoginDetails authenticateUser(String username, String password);
	// add a method to add JobSeeker Login Details
	LoginDetails addJobSeekerLoginDetails(LoginDetails jobSeekerLogin);
	//add a method to to delete the loginDetails
	String deleteLoginDetails(int id);
	
	public List<LoginDetails> getAllLogin();
	
	//get login details 
	LoginDetails getLogin(int id);
	
	LoginDetails getLoginByStoredProcedure(int id);
}
