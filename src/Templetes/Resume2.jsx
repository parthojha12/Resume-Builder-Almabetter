import React from "react";
import "./Resume1.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { connect } from "react-redux";
import fieldCd from "../Redux/constants/typeCodes";

function Resume2(props) {
  // Destructuring props
  const contactdata = props.contact;
  const educationdata = props.education;
  const experienceData = props.experience;
  const skillsData = props.skills;

  // Function to get contact data based on key
  const getcontactData = (key) => {
    if (contactdata && contactdata[key]) {
      return contactdata[key];
    }
    return "";
  };

  // Function to get education data based on key
  const geteducationData = (key) => {
    if (educationdata && educationdata[key]) {
      return educationdata[key];
    }
    return "";
  };

  // Finding the maximum key in experienceData object
  const experienceKeys = Object.keys(experienceData);
  const maxKey = Math.max(...experienceKeys);

  return (
    <>
      <div
        style={{
          width: "100vh",
          height: "118vh",
          border: "1px solid black",
          padding: 10,
          backgroundColor: "rgb(67, 63, 63)",
        }}
      >
        <div
          style={{
            padding: "2vh 2vh",
            float: "left",
            width: "32%",
            height: "116vh",
            backgroundColor: "rgb(97, 90, 90)",
          }}
        >
          <br />
          <h1
            style={{
              height: "4vh",
              width: "full",
              color: "white",
              backgroundColor: "rgb(195, 65, 65)",
              marginBottom: "2vh",
              marginTop: "5vh",
              textAlign: "center",
            }}
          >
            PERSONAL INFO
          </h1>
          <p className="w-full text-white mb-2 ">
            <PersonIcon />:{getcontactData(fieldCd.FirstName)}{" "}
            {getcontactData(fieldCd.LastName)}{" "}
          </p>
          <p className="w-full text-white mb-2">
            <CalendarMonthIcon /> {getcontactData(fieldCd.Dob)}{" "}
          </p>
          <p className="w-full text-white mb-2">
            <HomeWorkIcon /> {getcontactData(fieldCd.Address)},{" "}
            {getcontactData(fieldCd.City)}-{getcontactData(fieldCd.State)}.{" "}
            {"(" + getcontactData(fieldCd.Postal) + ")"}
          </p>
          <p className="w-full text-white mb-2">
            <EmailIcon /> {getcontactData(fieldCd.Email)}
          </p>
          <p className="w-full text-white mb-2">
            <CallIcon /> +91_{getcontactData(fieldCd.Mobile)}
          </p>

          <h2
            style={{
              height: "4vh",
              width: "full",
              color: "white",
              backgroundColor: "rgb(195, 65, 65)",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            KEY SKILLS
          </h2>

          {/* Rendering key skills */}
          {Object.keys(skillsData).map((key) => (
            <p key={key} className="key">
              {" "}
              {skillsData[key].skill}
            </p>
          ))}
        </div>

        <div
          style={{
            float: "right",
            width: "64%",
            height: "auto",
            padding: "5% 5%",
          }}
        >
          <div style={{ marginTop: "-5vh" }}>
            <h1
              style={{
                fontSize: "250%",
                fontWeight: "bold",
                letterSpacing: "5px",
                color: "white",
              }}
            >
              {getcontactData(fieldCd.FirstName)}
            </h1>
            <h2
              style={{
                fontSize: "250%",
                letterSpacing: "10px",
                color: "white",
              }}
            >
              {getcontactData(fieldCd.LastName)}
            </h2>
          </div>

          {/* Rendering job title from experienceData */}
          {experienceData[maxKey] && (
            <p style={{ fontSize: "100%", letterSpacing: "5px" }}>
              {experienceData[maxKey].jobTitle}
            </p>
          )}

          <br />
          <hr />
          <br />

          <div
            style={{
              width: "full",
              height: "4vh",
              color: "white",
              backgroundColor: "rgb(195, 65, 65)",
              textAlign: "center",
              color: "white",
            }}
          >
            OBJECTIVE
          </div>

          <p
            className="OBJECTIVE"
            style={{
              height: "auto",
              width: "full",
              paddingTop: "5px",
              paddingBottom: "5px",
              color: "white",
            }}
          >
            {getcontactData(fieldCd.Objective)}
          </p>

          <div
            style={{
              height: "4vh",
              width: "full",
              color: "white",
              backgroundColor: "rgb(195, 65, 65)",
            }}
          >
            <h1 style={{ textAlign: "center", color: "white" }}>
              WORK EXPERIENCE
            </h1>
          </div>

          {/* Rendering work experience */}
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

          <h1 style={{ paddingTop: "5px" }}></h1>
          <div
            style={{
              height: "4vh",
              width: "full",
              color: "white",
              backgroundColor: "rgb(195, 65, 65)",
            }}
          >
            <h1 style={{ textAlign: "center", color: "white" }}>EDUCATION</h1>
          </div>
          <h1
            className="type"
            style={{
              height: "auto",
              width: "full",
              fontWeight: "bold",
              fontSize: "115%",
              paddingTop: "5px",
              color: "white",
            }}
          >
            {geteducationData(fieldCd.Type)} :
          </h1>
          <p
            className="university"
            style={{ height: "auto", width: "full", color: "white" }}
          >
            {geteducationData(fieldCd.University)}.
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "full", color: "white" }}
          >
            {geteducationData(fieldCd.Degree)}.
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "full", color: "white" }}
          >
            <span style={{ color: "blue" }}>
              {geteducationData(fieldCd.Startyear)}
            </span>{" "}
            to{" "}
            <span style={{ color: "blue" }}>
              {geteducationData(fieldCd.Endyear)}
            </span>
            .
          </p>
        </div>
      </div>
    </>
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
  

export default connect(mapStateToProps)(Resume2);
