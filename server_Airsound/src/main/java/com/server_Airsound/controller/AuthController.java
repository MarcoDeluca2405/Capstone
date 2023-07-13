package com.server_Airsound.controller;


import java.io.IOException;
import java.sql.Blob;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
    	try {
			return ResponseEntity.ok(service.add_image(username, image.getBytes()));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
    }
    
    @GetMapping(value = "/api/auth/me/image", params = {"username"}, produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> viewImage(@RequestParam String username) {
        try {
            byte[] imageData = service.searchImage(username);
            if (imageData != null) {
                return ResponseEntity.ok().body(imageData);
            } else {
                // Restituisci una risposta di errore se l'immagine non è presente per l'utente
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            // Gestisci eventuali eccezioni e restituisci una risposta di errore
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
}
