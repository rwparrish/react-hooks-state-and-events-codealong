import React from "react";
import { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false)

  const handleClick = () => {
    setIsOn((isON) => !isON)
  }

  const color = isOn ? "red" : "white"

  return <button style={{background: color}} onClick={handleClick}>{ isOn ? "ON" : "OFF" }</button>;
}

export default Toggle;
