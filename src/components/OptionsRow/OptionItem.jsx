import React from 'react'

const OptionItem = ({option,handleChangeCategory}) => {
  return (
    <li onClick={()=>handleChangeCategory(option.id,option.translate)} className={"option-item"}>
    <h4 className="option-h4"> {option.name} </h4>
     </li>
  )
}

export default OptionItem