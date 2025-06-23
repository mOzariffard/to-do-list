import React, { useState } from 'react';

const WaveInput = ({ label = "Name", type = "text", value, onChange, required = false, ...props }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

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
    <div className="wave-group">
      <style jsx>{`
        .wave-group {
          position: relative;
        }
        .wave-group .input {
          font-size: 16px;
          padding: 10px 10px 10px 5px;
          display: block;
          width: 200px;
          border: none;
          border-bottom: 1px solid #515151;
          background: transparent;
        }
        .wave-group .input:focus {
          outline: none;
        }
        .wave-group .label {
          color: #999;
          font-size: 18px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 5px;
          top: 10px;
          display: flex;
        }
        .wave-group .label-char {
          transition: 0.2s ease all;
          transition-delay: calc(var(--index) * .05s);
        }
        .wave-group .input:focus ~ .label .label-char,
        .wave-group .input:valid ~ .label .label-char {
          transform: translateY(-20px);
          font-size: 14px;
          color: #5264AE;
        }
        .wave-group .bar {
          position: relative;
          display: block;
          width: 200px;
        }
        .wave-group .bar:before,
        .wave-group .bar:after {
          content: '';
          height: 2px;
          width: 0;
          bottom: 1px;
          position: absolute;
          background: #5264AE;
          transition: 0.2s ease all;
          -moz-transition: 0.2s ease all;
          -webkit-transition: 0.2s ease all;
        }
        .wave-group .bar:before {
          left: 50%;
        }
        .wave-group .bar:after {
          right: 50%;
        }
        .wave-group .input:focus ~ .bar:before,
        .wave-group .input:focus ~ .bar:after {
          width: 50%;
        }
      `}</style>
      
      <input
        required={required}
        type={type}
        className="input"
        value={inputValue}
        onChange={handleChange}
        {...props}
      />
      <span className="bar"></span>
      <label className="label">
        {renderLabelChars(label)}
      </label>
    </div>
  );
};