// Importing required dependencies and styles
import React from "react";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Resume3.css";
import { connect } from "react-redux";
import fieldCd from "../Redux/constants/typeCodes";

// Resume3 component
function Resume3(props) {
  // Destructuring props
  const { contact, education, experience, skills } = props;

  // Helper function to get contact data
  const getContactData = (key) => {
    if (contact && contact[key]) {
      return contact[key];
    }
    return "";
  };

  // Helper function to get education data
  const getEducationData = (key) => {
    if (education && education[key]) {
      return education[key];
    }
    return "";
  };

  // Getting the keys of experienceData and finding the maximum key value
  const experienceKeys = Object.keys(experience);
  const maxKey = Math.max(...experienceKeys);

  return (
    <div
      style={{
        width: "100vh",
        backgroundColor: "white",
        height: "110vh",
        border: "5px solid black",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "18vh",
          backgroundColor: "rgb(8, 36, 61)",
        }}
      >
        <h1
          className="name"
          style={{
            letterSpacing: "7px",
            fontSize: "300%",
            textAlign: "center",
            color: "white",
          }}
        >
          {getContactData(fieldCd.FirstName)} {getContactData(fieldCd.LastName)}
        </h1>

        {/* Displaying job title if experienceData[maxKey] exists */}
        {experience[maxKey] && (
          <p
            style={{
              color: "white",
              textAlign: "center",
              letterSpacing: "4px",
              fontSize: "120%",
            }}
          >
            {experience[maxKey].jobTitle}
          </p>
        )}
      </div>
      <div
        style={{
          float: "left",
          width: "35%",
          height: "90vh",
          backgroundColor: "white",
          padding: "5px 20px 5px 20px",
        }}
      >
        <div className="contact">
          <h1 style={{ color: "rgb(8, 36, 61)", fontWeight: "bold" }}>
            CONTACT
          </h1>
          <hr />
          <p className="para">
            <CallIcon /> {getContactData(fieldCd.Mobile)}
          </p>
          <p className="para" style={{ display: "flex" }}>
            <EmailIcon /> {getContactData(fieldCd.Email)}
          </p>
          <p className="para">
            <CalendarMonthIcon /> {getContactData(fieldCd.Dob)}
          </p>
          <p className="para">
            <HomeWorkIcon /> {getContactData(fieldCd.Address)},{" "}
            {getContactData(fieldCd.City)}-{getContactData(fieldCd.State)}.{" "}
            {"(" + getContactData(fieldCd.Postal) + ")"}
          </p>
        </div>
        <br />
        <div className="keyskills">
          <h1 style={{ color: "rgb(8, 36, 61)", fontWeight: "bold" }}>
            KEY-SKILLS
          </h1>
          <hr />
          {/* Displaying skillsData */}
          {Object.keys(skills).map((key) => (
            <p key={key}>{skills[key].skill}</p>
          ))}
        </div>
      </div>
      <div
        style={{
          float: "right",
          width: "65%",
          height: "90vh",
          backgroundColor: "white",
          padding: "5px 20px 5px 20px",
        }}
      >
        <div className="objective">
          <h1 style={{ color: "rgb(8, 36, 61)", fontWeight: "bold" }}>
            OBJECTIVE
          </h1>
          <hr />
          <p> {getContactData(fieldCd.Objective)}</p>
        </div>
        <br />
        <div className="experience">
          <h1 style={{ color: "rgb(8, 36, 61)", fontWeight: "bold" }}>
            PROFESSIONAL EXPERIENCE
          </h1>
          <hr />
        </div>
        {/* Displaying experienceData */}
        {Object.keys(experience).map((key) => (
          <div key={key}>
            <h1 style={{ fontWeight: "bold", paddingTop: "5px" }}>
              {experience[key].jobTitle}
            </h1>
            <p>{experience[key].organizationName}</p>
            <p style={{ color: "blue", paddingBottom: "5px" }}>
              <span style={{ color: "black" }}>From</span>{" "}
              {experience[key].startYear}{" "}
              <span style={{ color: "black" }}>To</span>{" "}
              {experience[key].endYear}
            </p>
            <hr />
          </div>
        ))}
        <div className="education">
          <h1 style={{ color: "rgb(8, 36, 61)", fontWeight: "bold" }}>
            EDUCATION
          </h1>
          <hr />
          <p1> {getEducationData(fieldCd.Type)}:</p1>
          <p>{getEducationData(fieldCd.University)}.</p>
          <p>{getEducationData(fieldCd.Degree)}.</p>
          <p>
            from {getEducationData(fieldCd.Startyear)} to{" "}
            {getEducationData(fieldCd.Endyear)}
          </p>
        </div>
        <br />
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
  
// Connecting the component to Redux store
export default connect(mapStateToProps)(Resume3);
