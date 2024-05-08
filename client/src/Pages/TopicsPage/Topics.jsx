import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import SpeakText from '../../Utils/Speaker';
import TopicsData from '../../Data/topicsData';
import ButtonComponent from '../../Components/ButtonComponent'

const Topics = () => {
    const {language} = useParams()
    const [topicList , setTopicList] = useState()
    const[buttonDisabled, setButtonDiabled] = useState(true)
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            const text = `You have selected ${language}, Now please select a Topic`
            const speaker = SpeakText(text)
            speaker.startSpeaking()
            setButtonDiabled(false)
          }, 1000);
          setTopicList(Object.keys(TopicsData))
          return () => clearTimeout(timeoutId);
      // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[])
  return (
    <div className='w-screen h-100  bg-slate-300'>
      <div className='w-100 flex h-24 justify-end items-center'>
      <Link className='mr-24 bg-blue-600 px-3 py-1 text-white font-medium rounded rounded-md' to={'/home'}>BACK</Link>
      </div>
      <p className='text-center text-3xl font-medium underline underline-offset-3'>Select Topic</p>
      <div className='w-screen grid md:grid-cols-3 grid-cols-1 justify-center items-center'>
      {
        topicList?.map((key)=>{
          return (
            <div key={key} className='w-100 h-100 flex justify-center items-center'>
                 <ButtonComponent disabled={buttonDisabled} key={key} text={key} routeTo={`/content/${key}`} />
            </div>
          )
        })
      }
      </div>
     
      
    </div>
  )
}

export default Topics
