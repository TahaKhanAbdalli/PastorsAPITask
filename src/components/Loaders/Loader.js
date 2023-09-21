import React from 'react';
import './loadercss.scss';
function Loader({ customStyles }) {
  return (
    <div className='loader'
    >
      <div className="lds-ring">
        <div style={customStyles} />
        <div style={customStyles} />
        <div style={customStyles} />
        <div style={customStyles} />
      </div>
    </div>
  );
}

export default Loader;
