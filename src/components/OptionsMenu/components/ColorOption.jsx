import React from 'react'
import {} from "../../../const"

const ColorOptions = ({color,setColor,currColor}) => {
  return (
    <button onClick={()=>setColor(color.name)} style={{backgroundColor:color.color}} className="option-btn">
      {/* <h5 style={{color:"transparent"}}>aa</h5> */}
      {currColor == color.name && '✔️'}
    </button>
  )
}

export default ColorOptions