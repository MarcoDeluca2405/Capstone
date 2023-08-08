package com.server_Airsound.service;

import java.io.ByteArrayInputStream;

import java.io.IOException;
import java.sql.Blob;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.server_Airsound.entity.ERole;
import com.server_Airsound.entity.Role;
import com.server_Airsound.entity.User;
import com.server_Airsound.exception.MyAPIException;
import com.server_Airsound.payload.LoginDto;
import com.server_Airsound.payload.RegisterDto;
import com.server_Airsound.repository.RoleRepository;
import com.server_Airsound.repository.UserRepository;
import com.server_Airsound.security.JwtTokenProvider;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;

import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PersistenceUnit;



@Service
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;
    private EntityManagerFactory entityManagerFactory; // Aggiungi questa dipendenza

    public AuthServiceImpl(AuthenticationManager authenticationManager,
                           UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder,
                           JwtTokenProvider jwtTokenProvider,
                           EntityManagerFactory entityManagerFactory) { // Aggiungi l'argomento al costruttore
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
        this.entityManagerFactory = entityManagerFactory; // Inizializza la dipendenza
    }
    
    


    @Override
    public String login(LoginDto loginDto) {
        
    	Authentication authentication = authenticationManager.authenticate(
        		new UsernamePasswordAuthenticationToken(
        				loginDto.getUsername(), loginDto.getPassword()
        		)
        ); 
    	System.out.println(authentication);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);
        System.out.println(token);
        return token;
    }

    @Override
    public String register(RegisterDto registerDto) {

        // add check for username exists in database
        if(userRepository.existsByUsername(registerDto.getUsername())){
            throw new MyAPIException(HttpStatus.BAD_REQUEST, "Username is already exists!.");
        }

        // add check for email exists in database
        if(userRepository.existsByEmail(registerDto.getEmail())){
            throw new MyAPIException(HttpStatus.BAD_REQUEST, "Email is already exists!.");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setLastname(registerDto.getLastname());
        user.setAdress(registerDto.getAdress());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        
        if(registerDto.getRoles() != null) {
	        registerDto.getRoles().forEach(role -> {
	        	Role userRole = roleRepository.findByRoleName(getRole(role)).get();
	        	roles.add(userRole);
	        });
        } else {
        	Role userRole = roleRepository.findByRoleName(ERole.ROLE_USER).get();
        	roles.add(userRole);
        }
        
        user.setRoles(roles);
        System.out.println(user);
        userRepository.save(user);

        return "Utente registrato con successo!.";
    }
    
    
    
    public String update(RegisterDto registerDto) {
    		
    	User user=userRepository.findByUsername(registerDto.getUsername());
 
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setLastname(registerDto.getLastname());
        user.setAdress(registerDto.getAdress());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

      
        System.out.println(user);
        userRepository.save(user);

        return "Utente modificato con successo!.";
    }
    
    @Transactional
    public String add_image(String username, MultipartFile image) {
        User user = userRepository.findByUsername(username);

        try {
            user.setImage(image.getBytes());
            userRepository.save(user);
            return "L'immagine profilo è stata salvata correttamente";
        } catch (IOException e) {
            e.printStackTrace();
           
        }
        return null;
    }
    
    @Transactional
    public String updateImage(String username, MultipartFile image) {
        User user = userRepository.findByUsername(username);
        try {
        	
			user.setImage(image.getBytes());
			userRepository.save(user);
			
			return "modificato con successo";
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return null;
    }

    @Transactional
    public ResponseEntity<InputStreamResource> searchImage(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getImage() != null) {
            try {
                ByteArrayInputStream inputStream = new ByteArrayInputStream(user.getImage());
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.IMAGE_JPEG); // Cambia se l'immagine non è JPEG

                return ResponseEntity.ok()
                        .headers(headers)
                        .body(new InputStreamResource(inputStream));
            } catch (Exception e) {
                e.printStackTrace();
                // TODO: gestire l'eccezione
            }
        }
        // Restituisci una risposta appropriata quando l'immagine non è trovata
        return ResponseEntity.notFound().build();
    }
    
    @Transactional(readOnly = true)
    public Boolean existImage(String username) {
    	User user= userRepository.findByUsername(username);
    	byte[] imageData=user.getImage();
    	return imageData != null && imageData.length > 0 ;
     }

    
    public Boolean getPassword(String password,String username) {
    	User user= userRepository.findByUsername(username);
    	return  passwordEncoder.matches(password,user.getPassword());
    }
    
    
    public ERole getRole(String role) {
    	if(role.equals("ADMIN")) return ERole.ROLE_ADMIN;
    	else if(role.equals("MODERATOR")) return ERole.ROLE_MODERATOR;
    	else return ERole.ROLE_USER;
    }
    
}
