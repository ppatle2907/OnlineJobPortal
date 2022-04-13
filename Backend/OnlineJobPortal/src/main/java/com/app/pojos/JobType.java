package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@Table(name = "job_type_tbl")
public class JobType {

	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // for automatic generation of id
	private Integer id;

	// here we can take string or enum for job type
	// type(enum)
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private JobTypeEnum jobtypes;
}
