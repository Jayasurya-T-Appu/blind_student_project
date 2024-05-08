import React, { useEffect, useState } from 'react'
import ButtonComponent from '../../Components/ButtonComponent';
import SpeakText from '../../Utils/Speaker';
const Home = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const text = "Hello Welcome. Please Select Your preffered Language !"
      const speaker = SpeakText(text)
      speaker.startSpeaking()
      setButtonDiabled(false)
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [])
  const [buttonDisabled, setButtonDiabled] = useState(true)

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <p className='text-center text-3xl font-medium underline underline-offset-3'>Select Language</p>
      <div className=' flex flex-col justify-center items-center md:flex-row'>
        <ButtonComponent text={'ENGLISH'} routeTo={`/topics/english`} disabled={buttonDisabled} />
        {/* <ButtonComponent text={'MALAYALAM'} routeTo={`/topics/malayalam`} disabled={buttonDisabled} /> */}

      </div>

    </div>
  )
}

export default Home
