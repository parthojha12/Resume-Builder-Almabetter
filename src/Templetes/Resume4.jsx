import React from "react";
import "./Resume4.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { connect } from "react-redux";
import fieldCd from "../Redux/constants/typeCodes";

function Resume4(props) {
  // Destructuring props for easier access
  const contactData = props.contact;
  const educationData = props.education;
  const experienceData = props.experience;
  const skillsData = props.skills;

  // Function to retrieve contact data based on key
  const getContactData = (key) => {
    if (contactData && contactData[key]) {
      return contactData[key];
    }
    return "";
  };

  // Function to retrieve education data based on key
  const getEducationData = (key) => {
    if (educationData && educationData[key]) {
      return educationData[key];
    }
    return "";
  };

  // Finding the maximum key from experienceData object
  const experienceKeys = Object.keys(experienceData);
  const maxKey = Math.max(...experienceKeys);

  return (
    <div
      style={{
        width: "100vh",
        height: "110vh",
        backgroundColor: "rgb(216, 214, 214)",
      }}
    >
      {/* Displaying first name */}
      <h1
        style={{
          letterSpacing: "10px",
          fontSize: "40px",
          textAlign: "center",
          color: "black",
          fontFamily: "biter",
        }}
      >
        {getContactData(fieldCd.FirstName)}
      </h1>
      {/* Displaying last name */}
      <h1
        style={{
          letterSpacing: "10px",
          fontSize: "40px",
          textAlign: "center",
          color: "black",
          fontFamily: "biter",
          marginTop: "-2vh",
          fontWeight: "bold",
        }}
      >
        {" "}
        {getContactData(fieldCd.LastName)}
      </h1>

      {/* Displaying the job title from the latest experience */}
      {experienceData[maxKey] && (
        <p
          style={{ color: "black", textAlign: "center", letterSpacing: "4px" }}
        >
          {experienceData[maxKey].jobTitle}
        </p>
      )}
      <hr />

      {/* Displaying the objective section */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "biter",
          fontWeight: "bold",
          fontSize: "17px",
          marginTop: "8px",
        }}
      >
        OBJECTIVE
      </p>
      <p
        style={{
          fontFamily: "Quicksand",
          textAlign: "center",
          fontSize: "15px",
          marginBottom: "3vh",
          width: "96%",
        }}
      >
        {getContactData(fieldCd.Objective)}
      </p>
      <hr />

      {/* Left section - Contact and Skills */}
      <div
        style={{
          float: "left",
          width: "35%",
          height: "90vh",
          backgroundColor: "rgb(216, 214, 214)",
          padding: "10px",
        }}
      >
        <h1
          style={{
            fontFamily: "biter",
            fontWeight: "bold",
            fontSize: "17px",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          CONTACT
        </h1>
        {/* Displaying contact information */}
        <p className="para">
          <CallIcon /> {getContactData(fieldCd.FirstName)}{" "}
          {getContactData(fieldCd.LastName)}
        </p>
        <p className="para">
          <EmailIcon /> {getContactData(fieldCd.Email)}
        </p>
        <p className="para">
          <HomeWorkIcon /> {getContactData(fieldCd.Address)},{" "}
          {getContactData(fieldCd.City)}-{getContactData(fieldCd.State)}.{" "}
          {"(" + getContactData(fieldCd.Postal) + ")"}
        </p>
        <p className="para">
          <CalendarMonthIcon /> {getContactData(fieldCd.Dob)}
        </p>
        <hr />

        <h1
          style={{
            fontFamily: "biter",
            fontWeight: "bold",
            fontSize: "17px",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          SKILLS
        </h1>
        {/* Displaying skills */}
        {Object.keys(skillsData).map((key) => (
          <p className="para" key={key}>
            {skillsData[key].skill}
          </p>
        ))}
        <hr />
      </div>

      {/* Right section - Work Experience and Education */}
      <div
        style={{
          float: "right",
          width: "65%",
          height: "90vh",
          backgroundColor: "rgb(216, 214, 214)",
          padding: "10px",
        }}
      >
        <h1
          style={{
            fontFamily: "biter",
            fontWeight: "bold",
            fontSize: "17px",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          WORK EXPERIENCE
        </h1>
        {/* Displaying work experience */}
        {Object.keys(experienceData).map((key) => (
          <div key={key}>
            <h1 style={{ fontWeight: "bold", paddingTop: "5px" }}>
              {experienceData[key].jobTitle}
            </h1>
            <p>{experienceData[key].organizationName}</p>
            <p style={{ color: "blue", paddingBottom: "5px" }}>
              <span style={{ color: "black" }}>From</span>{" "}
              {experienceData[key].startYear}{" "}
              <span style={{ color: "black" }}>To</span>{" "}
              {experienceData[key].endYear}
            </p>
            <hr />
          </div>
        ))}

        <h1
          style={{
            fontFamily: "biter",
            fontWeight: "bold",
            fontSize: "17px",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          EDUCATION
        </h1>
        {/* Displaying education information */}
        <p1>{getEducationData(fieldCd.Type)}:</p1>
        <p>{getEducationData(fieldCd.University)}.</p>
        <p>{getEducationData(fieldCd.Degree)}.</p>
        <p style={{ color: "blue", paddingBottom: "5px" }}>
          <span style={{ color: "black" }}>From</span>{" "}
          {getEducationData(fieldCd.Startyear)}{" "}
          <span style={{ color: "black" }}>To</span>{" "}
          {getEducationData(fieldCd.Endyear)}
        </p>
        <hr />
      </div>
    </div>
  );
}

// Map the Redux state to component props
const mapStateToProps = (state) => {
    return {
      // Assigning contactReducer state to 'contact' prop
      contact: state.contactReducer,
      // Assigning educationReducer state to 'education' prop
      education: state.educationReducer,
      // Assigning experienceReducer state to 'experience' prop
      experience: state.experienceReducer,
      // Assigning keyskillsReducer state to 'skills' prop
      skills: state.keyskillsReducer
    };
  };
  
export default connect(mapStateToProps)(Resume4);
