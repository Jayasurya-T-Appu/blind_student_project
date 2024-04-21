import React, { useEffect } from 'react'
import ButtonComponent from '../../Components/ButtonComponent';
import SpeakText from '../../Utils/Speaker';
const Home = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // const text = "Hello Welcome. Please Select Your preffered Language !"
      // SpeakText(text);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-200 md:flex-row'>

      <ButtonComponent text={'ENGLISH'}  routeTo={`/topics/english`}/>
      <ButtonComponent text={'MALAYALAM'}  routeTo={`/topics/malayalam`}/>
    </div>
  )
}

export default Home
