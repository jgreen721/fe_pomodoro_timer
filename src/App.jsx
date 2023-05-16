import {useState} from "react"
import './App.css'
import {Header,OptionsRow,Timer,GearMenuBtn,OptionsMenu} from "./components"

function App() {
  const [showMenu,setShowMenu] = useState(false)
  const [color,setColor] = useState("purple")
  const [text,setText] = useState("robot")
  const [randomNum,setRandomNum] = useState(Math.random() * 200 | 0)

  // const [pomodoro,setPomodoro] = useState(300)
  // const [short,setShort] = useState(60)
  // const [long,setLong] = useState(60)
  const [categories,setCategories] = useState([
    {id:1,name:"pomodoro",duration:300,translate:"0"},
    {id:2,name:"short",duration:180,translate:"11"},

    {id:3,name:"long",duration:60,translate:"22"},
    // {id:3,name:"short",duration:180,translate:"22"}
  ])
  // const [currId,setCurrId] = useState(0)

  const [currTimer,setCurrTimer] = useState(categories[0].duration)


  console.log(categories)



  const handleChangeDuration=(newTimes)=>{
    //convert into total seconds then update duration
    console.log("change duration fired!",newTimes)
    setCategories((categories)=>categories.map((c,i)=>({...c,duration:(newTimes[i] * 60)})));
    setCurrTimer(newTimes[0] * 60)
    console.log(categories)
    setRandomNum(Math.random() * 50000 | 0)
    // setPomodoro(newTimes[0])
    // setShort(newTimes[1])
    // setLong(newTimes[2])
 
   
  }

  const changeTimerCategory=(id)=>{
    // setCurrId()
    setCurrTimer(categories[id-1].duration)
    setRandomNum(Math.random() * 50000 | 0)

  }

  return (
    <div data-color={color} data-text={text} className="app">
      <Header/>
      <OptionsRow categories={categories} changeTimerCategory={changeTimerCategory}/>
      <Timer key={randomNum} currTimer={currTimer}/>
      <GearMenuBtn toggleMenu={()=>setShowMenu(!showMenu)}/>
      <OptionsMenu handleChangeDuration={handleChangeDuration} setColor={setColor} color={color} showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  )
}

export default App
