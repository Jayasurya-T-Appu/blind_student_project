import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SpeakText from '../../Utils/Speaker';
const Topics = () => {
    const {language} = useParams()
    useEffect(()=>{
        console.log(language);

        const timeoutId = setTimeout(() => {
            const text = `You have selected ${language}, Now please select a Topic`
            SpeakText(text);
          }, 1000);
          return () => clearTimeout(timeoutId);
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Topics
