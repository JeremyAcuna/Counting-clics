import React from 'react';
import '../StyleSheet/Button.css';

function Button(props){
  if(props.verify){
    return <button 
              className="btnClic"
              onClick={props.manageClic}>
              {props.text}
            </button>
  }
  else{
    return <button 
              className="btnRestart"
              onClick={props.manageClic}>
              {props.text}
            </button>
  }
}

export default Button;