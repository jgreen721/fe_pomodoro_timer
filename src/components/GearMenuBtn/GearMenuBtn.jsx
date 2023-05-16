import React from 'react'
import {settingsIcon} from "../../const"
import "./GearMenuBtn.css"

const GearMenuBtn = ({toggleMenu}) => {
  return (
    <button onClick={toggleMenu} className="btn menu-btn">
      <img src={settingsIcon} className="settings-icon" logo="settings-icon"/>
    </button>
  )
}

export default GearMenuBtn