import React from 'react';

const Validation = (props) => {
  const threshold = 8;
  let message = null;

  if (props.value === '') {
    message = null;
  } else if (props.value.length < threshold) {
    message = "Text too short";
  } else {
    message = "TEXT TOO LONG!";
  }  

  return (
    <div className="App">
      <p>{message}</p>
    </div>
  )
}


export default Validation;