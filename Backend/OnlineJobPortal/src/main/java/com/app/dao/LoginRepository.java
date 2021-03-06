package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.LoginDetails;
@Repository
public interface LoginRepository extends JpaRepository<LoginDetails, Integer> {
	//use finder method
	// find login details by username and password
	//select * from login_details where username=:username and password=:password
	Optional<LoginDetails> findByUsernameAndPassword(String username, String password);
	
	//add a method to find Jobseeker By Email ID
	LoginDetails findByEmailId(String emailId);
	
	@Query(value = "CALL get_login_details(:id);",nativeQuery = true) 
	LoginDetails getLoginDetailsByStoredProcedure(int id);
	
	
	@Query("select l.emailId from LoginDetails l where l.role.roleId=:id")
	List<String> getEmailIDByRole(@Param("id")int id);
	
}
