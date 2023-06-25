import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import right from "../../Components/images/Right.png";
import { connect } from "react-redux";
import nodata from "../../Components/images/nodata.png";
import { saveresume } from "../../Redux/actions/saveresume";

function Preview(props) {
  // State variables
  const [resume, setResume] = useState(props.previewData);

  //Navigation keyword
  const navigate = useNavigate();

  // recieves the Name for Saving Resume with Given Name
  const [download, setDownload] = useState({ filename: "" });

  // Handles Boolean Events
  const [error, setError] = useState(false);

  // Function to handle input change
  const onchange = (e) => {
    var key = e.target.name;
    var val = e.target.value;
    setDownload({ ...download, [key]: val });
    console.log(download);
  };

  // Function to close success message
  const Close = () => {
    setError(false);
  };

  // Function to navigate back to Detailfilling page
  function close() {
    navigate("/Detailfilling");
  }

  // Function to download the resume as PDF
  const downloadResume = async () => {
    const input = document.getElementById("print");
    console.log(document);
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        // pdf.output('dataurlnewwindow');
        pdf.save(`${download.filename}.pdf`);
      })
      .catch(function (error) {
      });
    props.saveresume(resume);
    setError(true);
  };

  return (
    <>
      {/* Header component for Navigation */}
      <Header />
      {/* Pop up messege for resume successfully saved  */}
      {error === true ? (
        <div className="fixed z-50 top-0 right-0 flex flex-col items-center gap-8 w-full h-full p-6 backdrop-blur-sm  text-xl  md:w-[100%]">
          <div className=" min-h-screen flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow py-8 px-12 border border-black shadow-lg ">
              <div className="flex justify-center">
                <p className="text-lg font-bold mb-8 grid grid-font-1 sm:font-sm">
                  Your Resume Has Been Successfully Saved !
                </p>
              </div>
              <div className="flex justify-center mb-8">
                <img className="w-12" src={right} />
              </div>
              <div className="flex justify-center ">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                  onClick={Close}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
        {/* Parent Div contains resume preview and resume downloader  */}
      <div class="flex flex-wrap p-3 w-full justify-center  ">
        {/* Resume preview div  */}
        <div
          style={{
            marginTop: "5vh",
            marginBottom: "5vh",
            width: "auto",
            height: "auto",
            justifyContent: "center",
          }}
          id="print"
        >
          {resume == null ? (
            <img style={{ width: "20vw" }} src={nodata} />
          ) : (
            resume.data
          )}
        </div>

          {/* Save resume button  */}
        <div style={{ marginLeft: "5vh", marginTop: "5vw" }}>
          {resume !== null ? (
            <>
              <h1 style={{ marginBottom: "10px", fontSize: "120%" }}>
                Create File Name
              </h1>
              <input
                style={{
                  marginBottom: "10px",
                  width: "32vh",
                  height: "4vh",
                  borderRadius: "5px",
                  border: "1px solid black",
                }}
                name="filename"
                onChange={onchange}
              ></input>
              <br></br>
              <button
                style={{
                  cursor: "pointer",
                  border: "2px solid blue",
                  width: "10vh",
                  height: "4vh",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginRight: "2vh",
                  Padding: "10px",
                }}
                onClick={close}
              >
                Back
              </button>

              <button
                style={{
                  cursor: "pointer",
                  border: "2px solid blue",
                  width: "10vh",
                  height: "4vh",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "5px",
                }}
                onClick={downloadResume}
              >
                Save
              </button>
            </>
          ) : (
            
            <div className="justify-center">
              <h1>Go to Home and Select at Leat One Resume</h1>
              <button
                onClick={function home() {
                  navigate("/Templete");
                }}
                style={{
                  padding: "5px 15px",
                  backgroundColor: "blue",
                  border: "black",
                  borderRadius: "2vw",
                  color: "white",
                }}
              >
                Home
              </button>{" "}
              <br />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    previewData: state.templateReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    saveresume: (resume) => dispatch(saveresume(resume)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
