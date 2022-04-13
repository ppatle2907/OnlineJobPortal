package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="state_tbl")
public class State {
	@Id //primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) //for automatic generation of id
	private Integer id;
	@Column(length=30,name="state_name")
	private String stateName;
}
