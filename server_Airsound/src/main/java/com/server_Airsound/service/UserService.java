package com.server_Airsound.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server_Airsound.entity.User;
import com.server_Airsound.payload.RegisterDto;
import com.server_Airsound.repository.UserRepository;

@Service
public class UserService {

	@Autowired UserRepository db;
	
	public User getUser(String username){
		return db.findByUsername(username);
	}
	
	
	
	public User getById(long id) {
		System.out.println(id);
		return db.findById(id).get();
	}
	
}
