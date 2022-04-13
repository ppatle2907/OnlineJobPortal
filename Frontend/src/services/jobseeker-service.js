import axios from "../http-common/jobSeeker-http-common"
//import axios from 'axios';
//i used for temporary but it is not a good practice , to best practice follow the madhura mam my-app frontend
//const baseURL= "http://localhost:8080/api/jobseeker";
//httpClient : axios instance and using axios insatnce frontend invoke the backend API
const getAll = () => {
  //axios.get() : perform httpGet request on particular URL
  return axios.get(""); //from backend it get all data of jobseeker
};

const getAllJObs = ()=>{
  return axios.get(`/deafult/jobs`);
}

const get = (id) => {
  return axios.get(`${id}`);
};

//to register the jobseeker
const register = (data) => {
    return axios.post(`/register`,data); //it will invoke backend "http://localhost:8080/api/jobseeker/register"
}

	// add a method to get all jobSeeker details
  const getAllJobSeeker = ()=>{
    return axios.get('/details');
  }

//get all jobseeker Education Details
  const getAllEducationDetails = (id) =>{
    return axios.get(`/education/${id}`);
  }

  const addEducationDetails = (education,id)=>{
    return axios.post(`/education/${id}`,education)
  }

  const addExperienceDetails = (experience,id)=>{
    return axios.post(`/exp/${id}`,experience)
  }

  const getAllExperience= (id)=>{
    return axios.get(`/exp/${id}`);
  }
  



  const searchByCity = (id)=>{
    console.log("Search by city : ")
    return axios.get(`/search/city/${id}`)
  }

  const searchBySkills = (skills)=>
  {
    console.log("Search by Skillsets : ")
    return axios.post(`/multiskill`,skills); 
  }

  const searchBySkillsAndCity = (skills,cityId) =>{
    console.log("Search by Skillsets and city : ")
    return axios.post(`/search/city-skills/${cityId}`,skills)
  }
  //all skilsets api
  //add jobseeker skills 
  const addSkills = (skills,id)=>{
    return axios.post(`/multiskill/${id}`,skills)
  }

  //get jobseeker skills
  const getSkills = (id)=>
  {
    return axios.get(`/skill/${id}`); 
  }

  //apply to job
  const jobApply = (data) =>{
    return axios.post(`/apply`,data);
  }

  	// get All jobSeeker applied job Post
  const getAllAppliedJobs = (id)=>{
    return axios.get(`/apply/${id}`);
  }

  const searchJobs = (data)=>{
    return axios.post(`/search`,data);
  }


export default { get, getAll,register,getAllJObs,getAllEducationDetails,addEducationDetails,searchByCity,searchBySkills,searchBySkillsAndCity,addSkills,getSkills,addExperienceDetails,getAllExperience,jobApply,getAllAppliedJobs,searchJobs };
