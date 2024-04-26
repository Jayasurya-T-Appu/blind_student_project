import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TopicsData from '../../Data/topicsData';
import SpeakText from '../../Utils/Speaker';
import { useNavigate  } from 'react-router-dom';
import ButtonComponent from '../../Components/ButtonComponent';
const Content = () => {
    const {content} = useParams()

    const [contentName, setContentName] = useState(null)
    const[buttonDisabled, setButtonDiabled] = useState(true)
    const navigate  = useNavigate ();

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            const text = `You have selected ${content}, Now please select a Topic`
            const speaker = SpeakText(text)
            speaker.startSpeaking()
            setButtonDiabled(false)
          }, 1000);
          setContentName(Object.keys(TopicsData[content]['contents']))
    
          return () => clearTimeout(timeoutId);
      // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[])
   
  return (
    <div className='w-screen h-screen  bg-slate-300'>
    <div className='w-100 flex h-24 justify-end items-center'>
    <Link className='mr-24 bg-blue-600 px-3 py-1 text-white font-medium rounded rounded-md' onClick={()=> navigate(-1)}>BACK</Link>
    </div>
    
    <div className='w-screen grid grid-rows-4 grid-flow-col justify-center items-center'>
      <p className='text-center text-3xl font-medium underline underline-offset-3'>Select {content}</p>
    {
      contentName?.map((key)=>{
        return (
          <ButtonComponent key={key} routeTo={`/singleContent/${content}/${key}`}  text={key} disabled={buttonDisabled}/>
        )
      })
    }
    </div>
   
    
  </div>
  )
}

export default Content
