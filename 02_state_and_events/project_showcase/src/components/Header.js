import React, {cloneElement, useState} from "react";

const Header = ({ handleCSS }) => {
  
  
  //Array Destructure
  //first element is state variable, second element is setState function. 
  const [ isDarkMode, setIsDarkMode] = useState(true) // <-- set inital value of state variable
  
  // Steps to use state and events
  // 1. Import useState from react
  // 2. Add an onClick event to the button element in JSX
  // 3. Pass that onClick event to an event handler function called handleToggle
  //      the naming convention for handler is handle + action verb
  // 4. Define handleToggle function. It will determine what happens upon that event
  // 5. Conditional rendering: In JSX, ternary logic
  
  function handleToggle(){
    setIsDarkMode(!isDarkMode) //where we update the state variable
    handleCSS(isDarkMode)
  }


  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggle}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
    </header>
  );
}

export default Header;
