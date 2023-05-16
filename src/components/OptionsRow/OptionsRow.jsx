import React, {useState} from 'react'
import OptionItem from "./OptionItem.jsx"
import "./OptionsRow.css"

const OptionsRow = ({categories,changeTimerCategory}) => {
  // const options = [{id:1,name:"pomodoro",translate:"0"},{id:2,name:"short break",translate:"90"},{id:3,name: "long break",translate:"185"}]
  const [currTranslate,setCurrTranslate] = useState(categories[0]?.translate)


  console.log("categories",categories)

  const handleChangeCategory=(id,translate)=>{
          setCurrTranslate(translate)
          changeTimerCategory(id)
  }
  return (
    <div className="options-div">
  
    <ul style={{"--i":currTranslate}} className="options-row">
      {categories.map(option=>(
      <OptionItem option={option}  handleChangeCategory={handleChangeCategory} id={option.id} key={option.id}/>
      ))}

    </ul>
    </div>
  )
}

export default OptionsRow