import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { settemplate, updatetemplate } from '../../Redux/actions/settemplate';
import { connect } from 'react-redux';

const TempleteCard = ({ data, thumbnail, settemplate, updatetemplate, resumedataprops }) => {
  const template = { data, thumbnail };
  const navigate = useNavigate();
  const Templetedata = resumedataprops;
  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = () => {
    if (Templetedata !== null) {
      // Update
      updatetemplate(template);
    } else {
      // Set
      settemplate(template);
    }
    navigate('/Detailfilling');
  };

  // Set isHovered to true when hovering over the image
  const handleHover = () => {
    setIsHovered(true);
  };
  
  // Set isHovered to false when the mouse leaves the image
  const handleHoverExit = () => {
    setIsHovered(false);
  };

  return (
    <>
     {/*main Content*/}
      <div style={{ margin: '3vh 1vw', height: 'auto', width: 'auto', position: 'relative' }}>
        <div>
          {/*Show Templates Dummy Images*/}
          <img
            style={{
              width: '100%',
              height: '45vh',
              border: '3px solid black',
              opacity: isHovered ? 0.7 : 1, // Set opacity when hovered
            }}
            src={template.thumbnail}
            alt="Template Thumbnail"
            onMouseEnter={handleHover} // Handle hover enter event
            onMouseLeave={handleHoverExit} // Handle hover exit event
          />

          {/*Show the button only when hovered*/}
          {isHovered && (
           //Resume select Button
           <button
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                alignItems: 'center',
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onSubmit}
              onMouseEnter={handleHover} // Handle hover enter event
              onMouseLeave={handleHoverExit} // Handle hover exit event
            >
              Select
            </button>
          )}
        </div>
      </div>
    </>
  );
};
// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    resumedataprops: state.templateReducer,
  };
};
// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    settemplate: (template) => dispatch(settemplate(template)),
    updatetemplate: (template) => dispatch(updatetemplate(template)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TempleteCard);
