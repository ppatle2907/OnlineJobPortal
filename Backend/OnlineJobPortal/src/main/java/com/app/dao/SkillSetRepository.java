package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.SkillSets;
import com.app.pojos.SkillType;
@Repository
public interface SkillSetRepository  extends JpaRepository<SkillSets, Integer>{
	SkillSets findBySkillType(SkillType skill);
	
}
