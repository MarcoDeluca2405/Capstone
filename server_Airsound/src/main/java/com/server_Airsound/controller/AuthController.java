package com.server_Airsound.controller;


import java.io.IOException;
import java.sql.Blob;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.server_Airsound.payload.JWTAuthResponse;
import com.server_Airsound.payload.LoginDto;
import com.server_Airsound.payload.RegisterDto;
import com.server_Airsound.service.AuthService;
import com.server_Airsound.service.AuthServiceImpl;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(maxAge = 3600)
public class AuthController {

    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    
    @Autowired AuthServiceImpl service;

    // Build Login REST API
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto){
           	
    	String token = authService.login(loginDto);

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setUsername(loginDto.getUsername());
        jwtAuthResponse.setAccessToken(token);

        return ResponseEntity.ok(jwtAuthResponse);
    }

    // Build Register REST API
    @PostMapping(value = {"/register", "/signup"})
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){
        String response = authService.register(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    @PutMapping(value = {"/me"})
    public ResponseEntity<String> update(@RequestBody RegisterDto registerDto){
        String response = service.update(registerDto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    @PostMapping("/{username}/immagine")
    public ResponseEntity<String> addImage(@PathVariable String username,@RequestParam("file") MultipartFile image){
    	return ResponseEntity.ok(service.add_image(username, image));
	
    }
    

    @PutMapping("/{username}/immagine")
    public ResponseEntity<String> updateImage(@PathVariable String username, @RequestParam("file") MultipartFile image) {
        String result = service.updateImage(username, image);
        return ResponseEntity.ok(result);
    }
    
    @GetMapping(value = "/me/image", params = {"username"}, produces = {MediaType.IMAGE_JPEG_VALUE , MediaType.IMAGE_PNG_VALUE})
    public ResponseEntity<InputStreamResource> viewImage(@RequestParam String username) {
       return service.searchImage(username);
    }
    
    @GetMapping(value=("/me/isImage"), params= {"username"})
    public ResponseEntity<Boolean> isImagine(@RequestParam String username){
    	return ResponseEntity.ok(service.existImage(username));
    }
    
    @GetMapping(value=("/{username}/"), params= {"password"})
    public ResponseEntity<Boolean> getPassword(@PathVariable String username, @RequestParam String password){
    	return ResponseEntity.ok(service.getPassword(password,username));
    }
    
}
