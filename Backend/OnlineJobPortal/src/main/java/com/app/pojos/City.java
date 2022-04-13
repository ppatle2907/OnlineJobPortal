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

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="city_tbl")
public class City {
	
		@Id //primary key
		@GeneratedValue(strategy = GenerationType.IDENTITY) //for automatic genration of id
		private Integer id;
		@Column(length=30,name="city_name")
		private String cityName;
		
		//many city have 1 state
		@ManyToOne
		@JoinColumn(name="state_id",nullable = false)
		private State state;
}
