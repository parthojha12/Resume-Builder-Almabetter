import React from 'react';
import gettingstarted from '../Components/images/LOGO.png';
import { useNavigate } from 'react-router-dom';

function GettingStarted() {

    //  navigation Keyword
  const navigate = useNavigate();

  // Function to navigate to the template page
  const goToTemplate = () => {
    navigate('/Templete');
  };

  return (
    <>
      {/* Main content */}
      <div className="min-h-screen flex justify-center">
        <div className="bg-white rounded-lg shadow p-8">
          {/* Introduction */}
          <p style={{ fontSize: 'large', marginBottom: '3vh', fontWeight: 'bold' }}>
            Create a professional resume with
          </p>
          <div style={{ width: '25vw', marginBottom: '10vh' }}>
            <img src={gettingstarted} alt="Getting Started" />
          </div>
          <hr />
          <hr />
          <hr />

          {/* Main Content */}
          <h1 className="text-3xl font-bold mb-4 mt-10">Welcome to Resume Builder</h1>
          <p className="text-lg mb-8">Create a professional resume in minutes.</p>

          {/* Get Started Button */}
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-10"
            onClick={goToTemplate}
          >
            Get Started
          </button>
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </>
  );
}

export default GettingStarted;
