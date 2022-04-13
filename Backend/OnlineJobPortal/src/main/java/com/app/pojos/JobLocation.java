package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="job_location")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobLocation {
	

	@Id			//primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)  //for auto generation
	@Column(name="job_location_id")
	private Integer jobLocationId; //pk  --->
	private String streetAddress;
	private String country;
	private int pincode;
	
	//many location can have one city
	@ManyToOne
	@JoinColumn(name="city_id",nullable = false)
	private City city;
	
	public JobLocation(String streetAddress, int pincode, City city) {
				this.streetAddress=streetAddress;
				this.pincode=pincode;
				this.city=city;
	}
}
