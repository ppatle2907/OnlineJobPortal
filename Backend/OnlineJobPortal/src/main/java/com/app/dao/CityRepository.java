package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.City;
@Repository
public interface CityRepository extends JpaRepository<City,Integer>{
	City findByCityName(String city);
	Optional<City> findById(Integer id);
}
