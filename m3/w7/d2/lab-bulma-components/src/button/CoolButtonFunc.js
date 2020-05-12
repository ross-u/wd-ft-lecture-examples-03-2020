import React from "react";

import "bulma/css/bulma.css";



const CoolButton = (props) => {

  const legend = {
    isDanger: 'is-danger',
    isSmall: 'is-small',
    isRounded: 'is-rounded',
    isSuccess: 'is-success'
  }

  let classString = 'button '; // start the classString
  classString += props.className;  // add the class names from className
  const propNames = Object.keys(props);

  // add class names from props
  propNames.forEach( (propNameStr) => {
    if ( legend[propNameStr] ) {  // if name exists in the legend
      classString += ' ' +  legend[propNameStr] // add the kebab case name to the class string
    }
  })

  return (
    <div>
      <button className={classString}> {props.children} </button>
    </div>
  );
};

export default CoolButton;
