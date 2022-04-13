import axios from '../http-common/company-http-commons'
//to register the compnay
const register = (data) => {
  return axios.post(`/register`, data) //it will invoke backend "http://localhost:8080/api/company/register"
}

//add job post
const addJobPost = (data, id) => {
  return axios.post(`/postjob/${id}`, data) //it will invoke backend "http://localhost:8080/api/company/register"
}

//get company details
const getCompanyDetails = (id) => {
  return axios.get(`${id}`)
}

//get all jobs
const getAllJobs = (id) => {
  return axios.get(`/postjob/${id}`)
}

const getAllAppliedJobSeeker = (id) => {
  return axios.get(`/appliedJobs/${id}`)
}
export default {
  register,
  addJobPost,
  getCompanyDetails,
  getAllJobs,
  getAllAppliedJobSeeker,
}
