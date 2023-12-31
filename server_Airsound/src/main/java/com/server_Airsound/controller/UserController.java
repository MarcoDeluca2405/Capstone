package com.server_Airsound.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.server_Airsound.entity.User;
import com.server_Airsound.payload.RegisterDto;
import com.server_Airsound.service.UserService;

@RestController
@RequestMapping("/api/User")
@CrossOrigin(maxAge = 3600)
public class UserController {

	@Autowired UserService us;
	
	@GetMapping(params= {"username"})
	public ResponseEntity<?> getUser(@RequestParam String username){
		return ResponseEntity.ok(us.getUser(username));
	}
	
	@GetMapping(params= {"id"})
	public ResponseEntity<?> getUserById(@RequestParam long id){
		return ResponseEntity.ok(us.getById(id));
	}
	
	
}
