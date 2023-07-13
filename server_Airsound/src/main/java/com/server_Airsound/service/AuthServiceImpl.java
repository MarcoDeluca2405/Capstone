package com.server_Airsound.service;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.server_Airsound.entity.ERole;
import com.server_Airsound.entity.Role;
import com.server_Airsound.entity.User;
import com.server_Airsound.exception.MyAPIException;
import com.server_Airsound.payload.LoginDto;
import com.server_Airsound.payload.RegisterDto;
import com.server_Airsound.repository.RoleRepository;
import com.server_Airsound.repository.UserRepository;
import com.server_Airsound.security.JwtTokenProvider;

import jakarta.persistence.NoResultException;



@Service
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtTokenProvider jwtTokenProvider;


    public AuthServiceImpl(AuthenticationManager authenticationManager,
                           UserRepository userRepository,
                           RoleRepository roleRepository,
                           PasswordEncoder passwordEncoder,
                           JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenProvider = jwtTokenProvider;
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
    
    public String add_image(String username, byte[] image) {
    	User user=userRepository.findByUsername(username);
    	Blob imageBlob;
		try {
			imageBlob = new SerialBlob(image);
			user.setImage(imageBlob);
			userRepository.save(user);
			return "L'immagine profilo è stato salvato correttamente";
		} catch (SerialException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
    }
    
    public byte[] searchImage(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            Blob imageBlob = user.getImage();
            if (imageBlob != null) {
                try {
                    int blobLength = (int) imageBlob.length();
                    return imageBlob.getBytes(1, blobLength);
                } catch (SQLException e) {
                    // Gestisci eventuali eccezioni durante l'ottenimento dei byte dell'immagine dal Blob
                    e.printStackTrace();
                }
            }
        }
        return null; // Restituisci null se l'immagine non è presente o non è recuperabile
    }

    
    public ERole getRole(String role) {
    	if(role.equals("ADMIN")) return ERole.ROLE_ADMIN;
    	else if(role.equals("MODERATOR")) return ERole.ROLE_MODERATOR;
    	else return ERole.ROLE_USER;
    }
    
}
