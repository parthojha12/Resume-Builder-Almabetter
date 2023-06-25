import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import nodata from './images/nodata.png';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Myresume(props) {

  // Recieving props from Reducer
  const savedresume = props.savedfile;

  // State for hover effect
  const [isHovered, setIsHovered] = useState(false);

    // Function to handle hover enter event
  const handleHover = () => {
    setIsHovered(true);
  };

  // Function to handle hover exit event
  const handleHoverExit = () => {
    setIsHovered(false);
  };

  // Function to download the resume as PDF
  const downloadResume = async () => {
        const input = document.getElementById('download');
        html2canvas(input)
        .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save(`AlmabetterResume.pdf`);})
        .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
     {/*Header Component for navigation */}
      <Header />
      {/* Main content */}
      <div className='flex py-8 px-8 justify-center items-center relative'
      onMouseEnter={handleHover} 
       onMouseLeave={handleHoverExit}> 
        <div
          id='download'
         
        >
          {savedresume !== null ? (
            <div style={{ opacity: isHovered ? 0.7 : 1 }}>{savedresume.data}</div>
          ) : (
            <img style={{ width: '15vw', marginTop: '10vw' }} src={nodata} />
          )}
        </div>
        {props.savedfile ? (
          <button
            variant='contained'
            color='primary'
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              alignItems: 'center',
            }}
            onClick={downloadResume} //Download the Document
            onMouseEnter={handleHover} // Handle hover enter event
            onMouseLeave={handleHoverExit} // Handle hover exit event
            className='bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded'
          >
            <CloudDownloadIcon /> Download
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    savedfile: state.resumeReducer,
  };
};
// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Myresume);
