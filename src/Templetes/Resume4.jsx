import React from 'react';
import './Resume4.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { connect } from 'react-redux';
import fieldCd from '../Redux/constants/typeCodes';

function Resume4(props) {
 
    const contactdata = props.contact;
  const educationdata = props.education;
  const experienceData=props.experience;
  const skillsData=props.skills
 
  const getcontactData=(key)=>{
   if(contactdata && contactdata[key]){
     return contactdata[key]
   }
   return "";
 }
 
 const geteducationData=(key)=>{
   if(educationdata &&educationdata[key]){
     return educationdata[key]
   }
   return "";
 }
 
 const experienceKeys = Object.keys(experienceData);
 const maxKey = Math.max(...experienceKeys);

  return (
    <div style={{ width:'100vh', height: '110vh', backgroundColor: 'rgb(216, 214, 214)' }}>
      <h1 style={{ letterSpacing: '10px', fontSize: '40px', textAlign: 'center', color: 'black', fontFamily: 'biter' }}>{getcontactData(fieldCd.FirstName)}</h1>
      <h1 style={{ letterSpacing: '10px', fontSize: '40px', textAlign: 'center', color: 'black', fontFamily: 'biter', marginTop: '-2vh', fontWeight: 'bold' }}> {getcontactData(fieldCd.LastName)}</h1>
      
      {experienceData[maxKey] && (
    
    <p style={{color:"black",textAlign:"center",letterSpacing:"4px"}}> {experienceData[maxKey].jobTitle}</p>
)}
      <hr/>

      <p style={{ textAlign: 'center', fontFamily: 'biter', fontWeight: 'bold', fontSize: '17px', marginTop: '8px' }}>OBJECTIVE</p>
      <p style={{ fontFamily: 'Quicksand', textAlign: 'center', fontSize: '15px', marginBottom: '3vh', width: '96%' }}>{getcontactData(fieldCd.Objective)}</p>
      <hr />
      <div style={{ float: 'left', width: '35%', height: '90vh', backgroundColor: 'rgb(216, 214, 214)', padding: '10px' }}>
        <h1 style={{ fontFamily: 'biter', fontWeight: 'bold', fontSize: '17px', marginTop: '10px', textAlign: 'center' }}>CONTACT</h1>
        <p className="para">
          <CallIcon /> {getcontactData(fieldCd.FirstName)} {getcontactData(fieldCd.LastName)}
        </p>
        <p className="para">
          <EmailIcon /> {getcontactData(fieldCd.Email)}
        </p>
        <p className="para">
          <HomeWorkIcon /> {getcontactData(fieldCd.Address)}, {getcontactData(fieldCd.City)}-{getcontactData(fieldCd.State)}. {'('+ getcontactData(fieldCd.Postal) +')'}
        </p> 
        <p className="para">
          <CalendarMonthIcon /> {getcontactData(fieldCd.Dob)}
        </p>
        <hr />

        <h1 style={{ fontFamily: 'biter', fontWeight: 'bold', fontSize: '17px', marginTop: '10px', textAlign: 'center' }}>SKILLS</h1>
        {  Object.keys(skillsData).map((key) => (
   <p className='para'  key={key} > {skillsData[key].skill}</p>  ))}
        <hr />
      </div>
      <div style={{ float: 'right', width: '65%', height: '90vh', backgroundColor: 'rgb(216, 214, 214)', padding: '10px' }}>
        <h1 style={{ fontFamily: 'biter', fontWeight: 'bold', fontSize: '17px', marginTop: '10px', textAlign: 'center' }}>WORK EXPERIENCE</h1>

              {Object.keys(experienceData).map((key) => (
        <div key={key}>
          <h1 style={{ fontWeight: 'bold', paddingTop: '5px' }}>{experienceData[key].jobTitle}</h1>
          <p>{experienceData[key].organizationName}</p>
          <p style={{ color: 'blue', paddingBottom: '5px' }}>
            <span style={{ color: 'black' }}>From</span> {experienceData[key].startYear}{' '}
            <span style={{ color: 'black' }}>To</span> {experienceData[key].endYear}
          </p>
          <hr />
        </div>
      ))}

        <h1 style={{ fontFamily: 'biter', fontWeight: 'bold', fontSize: '17px', marginTop: '10px', textAlign: 'center' }}>EDUCATION</h1>
        <p1>{geteducationData(fieldCd.Type)}:</p1>
        <p>{geteducationData(fieldCd.University)}.</p>
        <p>{geteducationData(fieldCd.Degree)}.</p>
        <p style={{ color: 'blue', paddingBottom: '5px' }}>
            <span style={{ color: 'black' }}>From</span> {geteducationData(fieldCd.Startyear)}{' '}
            <span style={{ color: 'black' }}>To</span> {geteducationData(fieldCd.Endyear)}</p>
        <hr />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
      contact : state.contactReducer,
      education: state.educationReducer,
      experience: state.experienceReducer,
      skills:state.keyskillsReducer
  }
}


export default connect(mapStateToProps)(Resume4)