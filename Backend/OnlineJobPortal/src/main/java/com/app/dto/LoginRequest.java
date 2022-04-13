package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//LoginRequest : it is a DATA TRANSFER OBJECT use for get login details from user and pass through the other layer in backend

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoginRequest {
	
	private String username;
	private String password;
}
