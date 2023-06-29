package com.server_Airsound.service;

import com.server_Airsound.payload.LoginDto;
import com.server_Airsound.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
