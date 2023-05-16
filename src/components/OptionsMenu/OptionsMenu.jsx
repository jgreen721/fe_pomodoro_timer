import React, {useRef} from 'react'
import {TimeOption,TextOption,ColorOption} from "./components"
import { closeIcon } from '../../const'
import "./OptionsMenu.css"

const OptionsMenu = ({showMenu,setShowMenu,color,setColor,handleChangeDuration}) => {
  const timeOptions = [
    {id:1,label:"pomodoro",min:"5",max:"60",step:"5"},
    {id:2,label:"short break",min:".1",max:"30",step:"1",miniStep:".1"},
    {id:3,label:"long break",min:"1",max:"30",step:"1"},
  ]

  const fonts=[
    {id:1,name:"kumbh",font:"Kumbh Sans, sans-serif"},
    {id:2,name:"roboto",font:"Roboto Slab, serif"},
    {id:3,name:"space",font:"Space Mono, monospace"},
  ]

  const colors=[
    {id:1,name:"red",color:"#f87070"},
    {id:2,name:"blue",color:"#70f3f8"},
    {id:3,name:"purple",color:"#d881f8"}
  ]

  const formRef = useRef();


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("handleSubmit fired!")
    let newTimes = []
    formRef.current.querySelectorAll(".time-val").forEach((timeEl,i)=>{
      // console.log("times",timeEl.textContent)
      newTimes.push(timeEl.textContent)

     
    })
    setShowMenu(!showMenu)


    handleChangeDuration(newTimes)

  }
  return (
    <div ref={formRef} className={showMenu ? "options-menu" : "options-menu hide-menu"}>
   <div className="top-menu-row">
      <h2>Settings</h2>
      <img onClick={()=>setShowMenu(false)} className="close-icon" src={closeIcon} alt="close" />
   </div>
   <div className="time-options-section">
     <h3>Time (Minutes)</h3>
     <ul className="time-options-row">
       {timeOptions.map(t=>(
         <TimeOption key={t.id} id={t.id-1} timeOption ={t}/>
       ))}
     </ul>
   </div>
   <div className="menu-options-row border-y">
     <h4>FONT</h4>
     <ul className="options-list">
       {fonts.map(f=>(
         <TextOption font={f} key={f.id}/>
       ))}
     </ul>
   </div>
   <div className="menu-options-row">
     <h4>COLOR</h4>
     <ul className="options-list">
       {colors.map(c=>(
         <ColorOption setColor={setColor} currColor={color} color={c} key={c.id}/>
       ))}
     </ul>
   </div>
   <button type="submit" onClick={handleSubmit} className="btn apply-btn white">Apply</button>
    </div>
  )
}

export default OptionsMenu