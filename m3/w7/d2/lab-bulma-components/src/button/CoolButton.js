import React from "react";

import "bulma/css/bulma.css";



class CoolButton extends React.Component {

  render () {

    const legend = {
      isDanger: 'is-danger',
      isSmall: 'is-small',
      isRounded: 'is-rounded',
      isSuccess: 'is-success'
    }

    let classString = 'button '; // start the classString
    classString += props.className;  // add the class names from className
    const propNames = Object.keys(this.props);

    // add class names from props
    propNames.forEach( (propNameStr) => {
      if ( legend[propNameStr] ) {  // if name exists in the legend
        classString += ' ' +  legend[propNameStr] // add the kebab case name to the class string
      }
    })

    return (
      <div>
        <button className={classString}> {this.props.children} </button>
      </div>
    );

  }
};

export default CoolButton;
