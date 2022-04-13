import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Login from "./Components/Login";


import Register from "./Components/Register";
import Home from "./Components/HomeComponents/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import FileUpload from "./Components/JobSeeker/FileUpload";
import JobList from "./Components/Company/JobList";

import Admin from "./Components/AdminComponent/Admin";
import JobSeekerDetails from "./Components/JobSeeker/JobSeekerDetails";
import EducationalDetails from "./Components/JobSeeker/EducationalDetails";
import ProtectedRoute from "./Components/ProtectedRoute";
import CompanyRegistration from "./Components/Company/CompanyRegistration";
import useAuth from "./Components/useAuth";
import {AuthenticateContext} from "./Context"
import { useState } from "react";
import CompanyHome from "./Components/Company/CompanyHome";
import ExperienceDetails from "./Components/JobSeeker/ExperienceDetails";
import Description from "./Components/Company/Description";
import AppliedJobs from "./Components/JobSeeker/AppliedJobs";

import ContactUs from "./Components/ContactUs";
import AddJobPost from "./Components/Company/AddJobPost";
import ViewAllPostedJobs from "./Components/Company/ViewAllPostedJobs";

import ViewAppliedJobSeekers from "./Components/Company/ViewAppliedJobSeekers"

window.$companyView = false; 
function App() {
  console.log("working ......");
  const [isAuth,setIsAuth] = useState(false)




  return (
    <div >
      <AuthenticateContext.Provider value={{isAuth,setIsAuth}}>
      <Router>
        <Header auth={isAuth}/>
        <Switch>
        <Route  exact path="/" component={Home}></Route>
        <Route  exact path="/register" component={Register}></Route>
        <Route  exact path="/companyRegister" component={CompanyRegistration}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/upload" component={FileUpload}></Route>
        <Route path="/joblist" component={JobList}></Route>
        
        <Route path="/admin" component={Admin}></Route>
        <Route path="/contact" component={ContactUs}></Route>
        
        {/* <Route path="/jobSeeker" component={JobSeekerDetails}></Route> */}
        <ProtectedRoute path="/jobSeeker" component={JobSeekerDetails} auth={isAuth}></ProtectedRoute>
        <ProtectedRoute path="/myjobs" component={AppliedJobs} auth={isAuth}></ProtectedRoute>
        <Route path="/education" component={EducationalDetails}></Route>
        <Route path="/experience" component={ExperienceDetails}></Route>
        <Route path="/companyHome" component={CompanyHome}></Route>
        <Route path="/viewJobPost/:id" component={Description}></Route>
        <Route path="/jobpost/:id" component={AddJobPost}></Route>
       
        <Route path="/viewAllJobs/:id" component={ViewAllPostedJobs} ></Route>
        <Route path="/viewAppliedJobSeeker/:id" component={ViewAppliedJobSeekers} ></Route>
        
        </Switch>
        <Footer/>
      </Router>
      </AuthenticateContext.Provider>
    </div>
  );
}

export default App;
