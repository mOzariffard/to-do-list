import React from 'react'
import './WaveInput.css'
const WaveInput = ({ label = "Name", type = "text", value, onChange, required = false, className = ""}) => {
    
  const renderLabelChars = (text) => {
    return text.split('').map((char, index) => (
      <span 
        key={index}
        className="label-char" 
        style={{ '--index': index }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className={`wave-group ${className}`}>
      <input
        required={required}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
      />
      <span className="bar"></span>
      <label className="label">
        {renderLabelChars(label)}
      </label>
    </div>
  );
};
export default WaveInput