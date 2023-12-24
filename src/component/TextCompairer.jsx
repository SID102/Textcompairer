import React, { useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer';

const TextComparisonApp = () => {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');

  const handleLeftTextChange = (e) => {
    setLeftText(e.target.value);
  };

  const handleRightTextChange = (e) => {
    setRightText(e.target.value);
  };

  const mergeChangesToLeft = () => {
    setLeftText(rightText);
  };

  const mergeChangesToRight = () => {
    setRightText(leftText);
  };

  return (
    <div>
      <div className='textarea'>
        <textarea
          rows="8" 
          cols="50" 
          style={{ 
            marginTop: '100px',  // Top margin
            marginLeft: '250px', // Left margin
            width: '100%', 
            maxWidth: '500px', 
            height: '200px', 
            resize: 'both'
          }} 
          value={leftText}
          onChange={handleLeftTextChange}
          placeholder="Enter text for the left side"
        />
        <textarea
          rows="8" 
          cols="50" 
          style={{ 
            marginTop: '20px',  // Top margin
            marginLeft: '00px', // Left margin
            width: '100%', 
            maxWidth: '500px', 
            height: '200px', 
            resize: 'both'
          }} 
          value={rightText}
          onChange={handleRightTextChange}
          placeholder="Enter text for the right side"
        />
      </div>
      <div>
        <button onClick={mergeChangesToLeft} style={{ 
            marginTop: '20px',  // Top margin
            marginLeft: '605px', // Left margin
          }} >Merge Changes to Left</button>
        <button onClick={mergeChangesToRight} style={{ 
            marginTop: '20px',  // Top margin
            marginLeft: '00px', // Left margin
          }} >Merge Changes to Right</button>
      </div>
      <ReactDiffViewer
        oldValue={leftText}
        newValue={rightText}
        splitView={true}
      />
    </div>
  );
};

export default TextComparisonApp;
