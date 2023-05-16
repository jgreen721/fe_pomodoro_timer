import React, {useEffect, useCallback, useRef, useState} from 'react'
import "./Timer.css"

const Timer = ({currTimer}) => {

  // const [pomodoro,setPomodoro] = useState(pomodoro)
  // const [short,setShort] = useState(short)
  // const [long,setLong] = useState(long)
  const [duration,setDuration] = useState(currTimer)
  const [total,setTotal] = useState(currTimer)
  const [isRunning,setIsRunning] = useState(false)
  const timerRef = useRef();



  useEffect(()=>{
    console.log("duration",duration)
    if(duration == 0)clearInterval(timerRef.current)
  },[duration])


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };


  const calculateDegrees = () => {
    const percentage = (duration / total) * 100;
    const degrees = (percentage / 100) * 360;
    return 360- Math.floor(degrees)
  };


  const runTimer=()=>{
    setIsRunning(true)
    timerRef.current = setInterval(()=>{
    
  
       setDuration((duration)=>duration -1);
     
    },100)
  }




const pauseTimer=()=>{
    clearTimeout(timerRef.current);
    setIsRunning(false)

}



  return (
    <div className="timer-container">
  
      <div className="circle outside-circle">
        <div  style={{"--i":`${calculateDegrees()}deg`}} className="circle timer-circle">
          <div className="circle display-circle bg-dark">
    <div className="timer-display">
      {/* <h1>{minutes}</h1>
      <h1>:</h1>
      <h1>{seconds.toString().padStart("2",'0')}</h1> */}
      <h1>{formatTime(duration)}</h1>
    </div>
  <button onClick={()=> !isRunning ? runTimer() : pauseTimer()} className="btn action-btn">
    <h3>{duration == 0 ? "Complete" : isRunning ? 'Pause' : 'Start'}</h3>
  </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer