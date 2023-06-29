package com.server_Airsound.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server_Airsound.entity.ERole;
import com.server_Airsound.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
