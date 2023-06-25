import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './Resume3.css'
import { connect } from 'react-redux';
import fieldCd from '../Redux/constants/typeCodes';

function Resume3 (props) {

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
    <div style={{width:'100vh',backgroundColor:"white",height:"110vh",border:"5px solid black"}}>
      <div style={{width:"100%",height:"18vh",backgroundColor:"rgb(8, 36, 61)"}}>
        <h1 className='name' style={{letterSpacing:"7px",fontSize:'300%',textAlign:"center",color:"white"}}>{getcontactData(fieldCd.FirstName)} {getcontactData(fieldCd.LastName)}</h1>
      
        {experienceData[maxKey] && (
    
    <p style={{color:"white",textAlign:"center",letterSpacing:"4px",fontSize:'120%'}}> {experienceData[maxKey].jobTitle}</p>
)}

        </div>
      <div style={{float:"left",width:"35%",height:"90vh",backgroundColor:'white',padding:"5px 20px 5px 20px"}}>
        <div className='contact' ><h1 style={{color:"rgb(8, 36, 61)",fontWeight:"bold"}} >CONTACT</h1><hr/>
        <p className='para'><CallIcon/> {getcontactData(fieldCd.Mobile)}</p>
        <p className='para' style={{display:"flex"}}><EmailIcon/> {getcontactData(fieldCd.Email)} </p>
        <p className='para'><CalendarMonthIcon/> {getcontactData(fieldCd.Dob)}</p>
        <p className='para'><HomeWorkIcon/> {getcontactData(fieldCd.Address)}, {getcontactData(fieldCd.City)}-{getcontactData(fieldCd.State)}. {'('+ getcontactData(fieldCd.Postal) +')'}</p>
        </div><br/>

        <div className='keyskills'><h1 style={{color:"rgb(8, 36, 61)",fontWeight:"bold"}}>KEY-SKILLS</h1><hr/>
        {  Object.keys(skillsData).map((key) => (
   <p  key={key} > {skillsData[key].skill}</p>  ))}
        </div>

      </div>
      <div style={{float:"right",width:"65%",height:'90vh',backgroundColor:'white',padding:"5px 20px 5px 20px"}}>
      <div className='objective'><h1 style={{color:"rgb(8, 36, 61)",fontWeight:"bold"}}>OBJECTIVE</h1><hr/>
        <p> {getcontactData(fieldCd.Objective)}</p>
        </div><br/>

        <div className='experience'><h1 style={{color:"rgb(8, 36, 61)",fontWeight:"bold"}}>PROFESSIONAL EXPERIENCE</h1><hr/></div>
        
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

<div className='education'><h1 style={{color:"rgb(8, 36, 61)",fontWeight:"bold"}}>EDUCATION</h1><hr/>
        <p1> {geteducationData(fieldCd.Type)}:</p1>
        <p>{geteducationData(fieldCd.University)}.</p>
        <p>{geteducationData(fieldCd.Degree)}.</p>
        <p>from {geteducationData(fieldCd.Startyear)} to {geteducationData(fieldCd.Endyear)}</p>
        </div><br/>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
      contact : state.contactReducer,
      education: state.educationReducer,
      experience: state.experienceReducer,
      skills:state.keyskillsReducer
  }
}


export default connect(mapStateToProps)( Resume3)