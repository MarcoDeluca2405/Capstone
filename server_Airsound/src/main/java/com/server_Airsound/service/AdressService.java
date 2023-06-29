package com.server_Airsound.service;

import java.lang.StackWalker.Option;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.javafaker.Options;
import com.server_Airsound.entity.Adress;
import com.server_Airsound.repository.AdressRepository;

@Service
public class AdressService {

	@Autowired AdressRepository db;
	
	public Adress add(Adress andress) {
		return db.save(andress);
	}
	
	public List<Adress> findRegione(String Regione){
		return db.findByRegioneIgnoreCase(Regione);
	}
	
	public List<Adress> findRegioneandSigla(String Regione,String Sigla){
		return db.findByRegioneIgnoreCaseAndSiglaIgnoreCase(Regione,Sigla);
	}
	
	public Adress findCity(String city) {
		return db.findByCittàIgnoreCase(city);
	}
	
	public List<Adress> findAll(){
		return db.findAll();
	}
	public Adress findCitta(String citta){
		return db.findByCittàIgnoreCase(citta);
	}
	
	public HashSet<String> findAllRegioni(){
		List<Adress> list=db.findAll();
		HashSet<String> set=new HashSet<String>();
		for(Adress l : list) {
			set.add(l.getRegione());
		}
		return set;
	}
	
	public HashSet<String> findAllTerritorio(String Regione){
		List<Adress> list=db.findByRegioneIgnoreCase(Regione);
		HashSet<String> set=new HashSet<String>();
		for(Adress l : list) {
			set.add(l.getTerritorio());
		}
		set.forEach(s-> System.out.println(s));
		return set;
	}
	
	public HashSet<String> findAllCitta(String Territorio){
		List<Adress> list=db.findByTerritorioIgnoreCase(Territorio);
		HashSet<String> set=new HashSet<String>();
		for(Adress l : list) {
			set.add(l.getCittà());
		}
		set.forEach(s-> System.out.println(s));
		return set;
	}

	public Adress findbyId(Long id) {
		return db.findById(id).get();
	}
	
}
