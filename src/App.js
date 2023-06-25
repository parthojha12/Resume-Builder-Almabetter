import './App.css';
import 'react-router-dom';
import React from 'react';
import {  Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Aboutus from './Pages/About Us/Aboutus';
import PersonalInformation from './Components/PersonalInformation';
import Education from './Components/Education';
import WorkExperience from './Components/WorkExperience';
import Myresume from './Components/Myresume';
import KeySkills from './Components/Keyskills';
import Templetes from './Pages/Home/Templetes';
import Preview from './Pages/Preview/Preview';
import GettingStarted from './Components/GettingStarted';
import Detailfilling from './Pages/Details Filling/Detailfilling';

  function App() {

  return (<>

       {/* all thr routes are defined with perticular path for Navigation Between Pages */}
       
 <Routes> <Route path="/Detailfilling" element={<Detailfilling/>} />
          <Route exact path='/Templete' element={<Templetes/>}/>
          <Route exact path='/header' element={<Header/>}/>
          <Route exact path="/personal" element={<PersonalInformation/>}/>
          <Route exact path="/education" element={<Education/>}/>
          <Route exact path="/about-us" element={<Aboutus/>}/>
          <Route exact path="/" element={<GettingStarted/>}/>
          <Route exact path='/work' element={<WorkExperience/>}/>
          <Route exact path='/myresume' element={<Myresume/>}/>
          <Route exact path='/skills' element={<KeySkills/>}/>
          <Route exact path='/preview' element={<Preview/>}/>
  </Routes>
   </>
  );
}
export default App;