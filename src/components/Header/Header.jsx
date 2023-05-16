import React from 'react'
import {logo} from "../../const"

const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo" />
    </header>
  )
}

export default Header