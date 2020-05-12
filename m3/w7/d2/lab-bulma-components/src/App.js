import React from "react";
import "./App.css";
import FormField from "./formfield/FormField";
import CoolButtonFunc from "./button/CoolButtonFunc";

import Navbar from "./navbar/Navbar";

import "bulma/css/bulma.css";

class App extends React.Component {
  state = {}
  
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <CoolButtonFunc isSmall isDanger className="is-rounded my-class">
          My Cool Button 1
        </CoolButtonFunc>
        
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButtonFunc isSmall isSuccess isRounded>
          Button 2
        </CoolButtonFunc>
      </div>
    );
  }
}

export default App;
