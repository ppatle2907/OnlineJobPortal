package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojos.LoginDetails;
import com.app.services.ILoginService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {
	
	//Dependency injection required LoginService
	@Autowired(required=true)
	private ILoginService loginService;  //spring container  will provide the instance of ILoginService  at runtime
	
		// add req handling method to send all login details to the caller(front end->ReactJs)
		// initially test with post
		// no path url added in frontend reactJs so here not added uri in getMappin
		// ? : wildCard
		// getting resources : getting employee details
		/*
		 * What is the use of ResponseEntity in spring boot? ResponseEntity represents
		 * an HTTP response, including headers, body, and status. While @ResponseBody
		 * puts the return value into the body of the response, ResponseEntity also
		 * allows us to add headers and status code.
		 */

		/*
		 * Replace Resource by ResponseEntity Standard design practice for back end : DO
		 * NOT directly send response body , instead wrap it in ResponseEntity
		 */
	
	//method for login
	@PostMapping("/signin")
	public ResponseEntity<?> userLogin(@RequestBody LoginRequest request) //data from request body here we de-marshell (json to java) into LoginRequest DTO , so using this we can get username and password
	{
		//wrapped up login object into ResponseEntity and send to client
		LoginDetails login = loginService.authenticateUser(request.getUsername(),request.getPassword());
		System.out.println(login);
		return ResponseEntity.ok(login);
	}
	
	//add a method to get all jobSeeker details
		@GetMapping("/details")
		public ResponseEntity<?> getAllLoginDetails(){
			System.out.println("in getAllJobSeekerDetails : ");
			return new ResponseEntity<>(loginService.getAllLogin(), HttpStatus.OK);
		}
		
		//add a method to get login details
		@GetMapping("/{id}")
		public ResponseEntity<?> getLoginDetails(@PathVariable int id){
			System.out.println("in getLoginDetails : ");
			return new ResponseEntity<>(loginService.getLogin(id), HttpStatus.OK);
		}
		
				//add a method to get login details by using stored procedure
				@GetMapping("pro/{id}")
				public ResponseEntity<?> getLogin(@PathVariable int id){
					System.out.println("in getLoginDetails : ");
					return new ResponseEntity<>(loginService.getLoginByStoredProcedure(id), HttpStatus.OK);
				}
	
}
