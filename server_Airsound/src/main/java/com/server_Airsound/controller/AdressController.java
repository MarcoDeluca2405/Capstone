package com.server_Airsound.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

import com.server_Airsound.entity.Adress;
import com.server_Airsound.service.AdressService;

@RestController
@CrossOrigin(maxAge = 3600)
@RequestMapping("/api/Adress")
public class AdressController {
		
	@Autowired AdressService as;
	
	@GetMapping( value="/Regione" ,params={"Regione"})
	public ResponseEntity<?> getALLRegione(@RequestParam String Regione){
		return ResponseEntity.ok(as.findRegione(Regione));
	}
	
	@GetMapping(value="/all")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok(as.findAll());
	}
	
	@GetMapping(value="/all/Regione")
	public ResponseEntity<?> getAllRegioni(){
		return ResponseEntity.ok(as.findAllRegioni());
	}
	
	@GetMapping(value="/all/Territorio", params= {"Regione"})
	public ResponseEntity<?> getAllTerritorio(@RequestParam String Regione){
		return ResponseEntity.ok(as.findAllTerritorio(Regione));
	}
	
	@GetMapping(value="/all/Citta", params= {"Territorio"})
	public ResponseEntity<?> getAllCitta(@RequestParam String Territorio){
		return ResponseEntity.ok(as.findAllCitta(Territorio));
	}
	
	@GetMapping(value="/Citta", params= {"name"})
	public ResponseEntity<?> getCitta(@RequestParam String name){
		return ResponseEntity.ok(as.findCitta(name));
	}
	
}
