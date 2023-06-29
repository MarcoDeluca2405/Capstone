package com.server_Airsound.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server_Airsound.entity.Adress;

@Repository
public interface AdressRepository extends JpaRepository<Adress, Long>{
	
	public List<Adress> findByRegioneIgnoreCase(String Regione);
	public List<Adress> findByTerritorioIgnoreCase(String Territorio);
	public List<Adress> findByRegioneIgnoreCaseAndSiglaIgnoreCase(String Regione,String Sigla);
	public Adress findByCittàIgnoreCase(String citta);
}
