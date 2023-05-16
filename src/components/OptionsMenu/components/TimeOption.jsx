import React, {useState} from 'react'
import { arrowUp, arrowDown } from '../../../const'

const TimeOption = ({timeOption}) => {
  const [timeVal,setTimeVal] = useState(timeOption.min)



  const changeTime=(dir)=>{
    if(timeVal == 0 && dir == "down")return;
      if(dir == "up"){
        if(timeOption.label == "short break" && timeVal < 1)return setTimeVal((timeVal)=>parseFloat(timeVal) + parseFloat(timeOption.miniStep))
        setTimeVal((timeVal)=>parseInt(timeVal) + parseInt(timeOption.step))
      }
      else{
        if(timeOption.label == "short break" && timeVal <= 1)return setTimeVal((timeVal)=>parseFloat(timeVal) - parseFloat(timeOption.miniStep))

        setTimeVal((timeVal)=>parseInt(timeVal) - parseInt(timeOption.step));
      }
  }
  return (
    <div className="time-option-div">
        <p className="time-option-label">{timeOption.label}</p>
        <div className="time-input-div">
            <h5 className="time-val">{JSON.stringify(timeVal).length > 3 ? parseFloat(timeVal).toFixed(2) : timeVal}</h5>
            <div className="arrows-div">
                <button onClick={()=>changeTime('up')} className="arrow-btn">
                <img src={arrowUp} alt="" />
                </button>
                <br/>
                <button onClick={()=>changeTime('down')} className="arrow-btn">
                <img src={arrowDown} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TimeOption