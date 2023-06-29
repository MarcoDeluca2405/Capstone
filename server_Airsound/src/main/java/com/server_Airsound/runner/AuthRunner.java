package com.server_Airsound.runner;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;


import com.opencsv.bean.CsvToBeanBuilder;
import com.server_Airsound.entity.Adress;
import com.server_Airsound.entity.ERole;
import com.server_Airsound.entity.Role;
import com.server_Airsound.entity.User;
import com.server_Airsound.payload.RegisterDto;
import com.server_Airsound.repository.RoleRepository;
import com.server_Airsound.repository.UserRepository;
import com.server_Airsound.service.AdressService;
import com.server_Airsound.service.AuthService;





@Component
public class AuthRunner implements ApplicationRunner {
	
	@Autowired RoleRepository roleRepository;
	@Autowired UserRepository userRepository;
	@Autowired PasswordEncoder passwordEncoder;
	@Autowired AdressService adressService;
	@Autowired AuthService authService;
	@Autowired AdressService as;
	
	private Set<Role> adminRole;
	private Set<Role> moderatorRole;
	private Set<Role> userRole;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		System.out.println("Run...");
		// Metodo da lanciare solo la prima volta
		// Serve per salvare i ruoli nel DB
		setRoleDefault();
		saveAdressDb();
		saveAdmin();
		//as.findRegioneandSigla("piemonte","TO").forEach(l->System.out.println(l));
		//System.out.println(as.findCity("brosso"));
	}
	
	private void setRoleDefault() {
		Role admin = new Role();
		admin.setRoleName(ERole.ROLE_ADMIN);
		roleRepository.save(admin);
		
		Role user = new Role();
		user.setRoleName(ERole.ROLE_USER);
		roleRepository.save(user);
		
		Role moderator = new Role();
		moderator.setRoleName(ERole.ROLE_MODERATOR);
		roleRepository.save(moderator);
		
//		adminRole = new HashSet<Role>();
//		adminRole.add(admin);
//		adminRole.add(moderator);
//		adminRole.add(user);
//		
//		moderatorRole = new HashSet<Role>();
//		moderatorRole.add(moderator);
//		moderatorRole.add(user);
//		
//		userRole = new HashSet<Role>();
//		userRole.add(user);
	}
	
	private void saveAdressDb() throws IllegalStateException, IOException {
		List<Adress> listaAdress = new CsvToBeanBuilder<Adress>(
				new FileReader("../server_Airsound/src/main/resources/csv/Elenco-comuni-italiani.csv"))
				.withSeparator(';').withType(Adress.class).build().parse();
		for (int i = 1; i < listaAdress.size(); i++) {
			as.add(listaAdress.get(i));
			//System.out.println(listaAdress.get(i));
		}
	}
	
	public void saveAdmin() {
		RegisterDto admin=new RegisterDto();
		Adress adress=adressService.findbyId((long)1704);
		
		admin.setAdress(adress);
		admin.setEmail("prova@gmail.com");
		admin.setLastname("De Luca");
		admin.setName("Marco");
		admin.setPassword("admin");
		admin.setUsername("admin");
		Set<String> roles = new HashSet<String>();
		roles.add("ADMIN");
		admin.setRoles(roles);
		
		authService.register(admin);
	}
}
