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
@Table(name="skill_sets_tbl")
public class SkillSets {
	@Id //primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) //for automatic genration of id
	private Integer id;
	
	// type(enum)
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private SkillType skillType;  //it need to be enum or we can take normal string also
	//private String otherSkills;
}
