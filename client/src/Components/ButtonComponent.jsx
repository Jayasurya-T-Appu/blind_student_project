import React from 'react'
import SpeakText from '../Utils/Speaker'
import { useNavigate } from 'react-router-dom';
const ButtonComponent = ({ text, routeTo, color = 'bg-cyan-500' }) => {

  const navigator = useNavigate();


  const handleSpeak = (e) => {
    SpeakText(e.target.value)
  }
  const handleClick = () => {
    if (routeTo){
      navigator(`${routeTo}`)
    }
  }

  return (
    <>
      <button onMouseEnter={handleSpeak} onClick={handleClick} value={text} className={`${color} p-5 m-6 w-72 text-3xl text-white rounded rounded-md hover:scale-110 ease-in-out duration-200`}>{text}</button>
    </>
  )
}

export default ButtonComponent
