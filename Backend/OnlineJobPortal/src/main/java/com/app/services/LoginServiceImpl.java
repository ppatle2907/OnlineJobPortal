package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.LoginRepository;
import com.app.pojos.LoginDetails;

@Service // to tell the spring container to create it's bean
@Transactional
public class LoginServiceImpl implements ILoginService {

	// Injection Dependency : LoginRepsoitory
	@Autowired
	private LoginRepository loginRepo;

	@Override
	public LoginDetails authenticateUser(String username, String password) {
		System.out.println("In authenticate user : ");
		// invoke LoginRepositorie's findByUsernameAndPassword , to validate userId and
		// password
		// findByUsernameAndPassword : return the LoginDetails if valid user
		// if user found it will return login details else will throw exception
		LoginDetails user = loginRepo.findByUsernameAndPassword(username, password)
				.orElseThrow(() -> new RuntimeException("Authenitacation failed"));
		System.out.println("User Uthenticate successfully");
		return user;
		
	}

	// add a method to save the login details
	@Override
	public LoginDetails addJobSeekerLoginDetails(LoginDetails jobSeekerLogin) {
		return loginRepo.save(jobSeekerLogin);
	}

	//delete login details
	@Override
	public String deleteLoginDetails(int id) {
		System.out.println("in login details delete method by id");
		loginRepo.deleteById(id);
		return "login details deleted succesfully";
	}

	//get all login details
	@Override
	public List<LoginDetails> getAllLogin() {
		return loginRepo.findAll();
	}

	//get login detail
	@Override
	public LoginDetails getLogin(int id) {
		return loginRepo.findById(id).orElseThrow(() -> new RuntimeException("Login Details not found"));

	}
	//get login details by using stored procedure
	@Override
	public LoginDetails getLoginByStoredProcedure(int id) {
		return loginRepo.getLoginDetailsByStoredProcedure(id);

	}

}
