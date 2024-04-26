import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopicsData from '../../Data/topicsData';
import SpeakText from '../../Utils/Speaker';
const SingleContent = () => {
    const { content, contentkey } = useParams()
    const [isReading, setIsReading] = useState(false);
    const [speaker, setSpeaker] = useState(null)
    const startReading = (text) => {
        const newSpeaker = SpeakText(text);
        newSpeaker.startSpeaking();
        setIsReading(true);
        setSpeaker(newSpeaker);
      };
  
    useEffect(() => {
        let timeoutId;
    let readingTimeout;

    
    timeoutId = setTimeout(() => {
      const text = `You have selected ${contentkey}`;
      startReading(text);
    }, 1000);

    readingTimeout = setTimeout(() => {
      const text = TopicsData[content]?.contents[contentkey]?.content || '';
      startReading(text);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(readingTimeout);
      if (isReading && speaker) {
        speaker.stopSpeaking();
        setIsReading(false);
      }
    };
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [isReading])

    return (
        <div className='w-screen h-screen bg-slate-300 p-5 flex flex-col justify-center items-center'>
            <p className='text-center text-4xl font-medium underline underline-offset-3'>{contentkey}</p>

            <div className='m-5'>
                <p className='font-medium text-justify'>{TopicsData[content]['contents'][contentkey]["content"]}</p>
            </div>

        </div>
    )
}

export default SingleContent
