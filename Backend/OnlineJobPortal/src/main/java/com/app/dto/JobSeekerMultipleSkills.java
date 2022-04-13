package com.app.dto;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JobSeekerMultipleSkills {
	ArrayList<Integer> skills= new ArrayList<Integer>();
}
