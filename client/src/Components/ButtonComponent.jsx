import React, { useEffect, useState } from 'react'
import SpeakText from '../Utils/Speaker'
import { useNavigate } from 'react-router-dom';
const ButtonComponent = ({ text, routeTo, color = 'bg-cyan-500', disabled=true }) => {

  const navigator = useNavigate();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speaker = SpeakText(text)
  let timeoutId;
  useEffect(()=>{
    
    // console.log(routeTo);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      handleSpeak()
    }, 500); 
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsSpeaking(false)

  };

  const handleSpeak = (e) => {
    if (!isSpeaking) {
     
      speaker.startSpeaking()
      setIsSpeaking(true);
    }
  }
  const handleClick = () => {
    if (routeTo){
      navigator(`${routeTo}`)
    }
  }

  return (
    <>
      <button disabled={disabled ?true:false} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} value={text} className={`${color} p-5 m-6 w-72 h-24 text-2xl text-white rounded rounded-md hover:scale-110 ease-in-out duration-200`}>{text}</button>
    </>
  )
}

export default ButtonComponent
