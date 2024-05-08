import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopicsData from '../../Data/topicsData';
import SpeakText from '../../Utils/Speaker';
const SingleContent = () => {
  const { content, contentkey } = useParams()
  const [isReading, setIsReading] = useState(false);
  const [speaker, setSpeaker] = useState(null)

  const [audio, setAudio] = useState(null)
  const startReading = (text) => {
    const newSpeaker = SpeakText(text);
    newSpeaker.startSpeaking();
    setIsReading(true);
    setSpeaker(newSpeaker);
  };
  const loadAudio = async (link) => {
    try {

      const audioModule = await import(`../../assets/audio/${link}`);
      const audio = new Audio(audioModule.default);
      console.log(audio);
      setAudio(audio);
    } catch (error) {
      console.error('Error loading audio:', error);
    }
  };
  let timeoutId;

  useEffect(() => {
    let link = TopicsData[content]['contents'][contentkey]["audio"]
    

    let audioTimeout
    loadAudio(link)
    
   
    const playAudio = () => {
      if (audio) {
        audio.play();
      }
    };

    audioTimeout = setTimeout(playAudio, 5000);

    timeoutId = setTimeout(() => {
      const text = `You have selected ${contentkey}`;
   
      startReading(text);
   
    }, 3000);

    // readingTimeout = setTimeout(() => {
    //   const text = TopicsData[content]?.contents[contentkey]?.content || '';
    //   // startReading(text);
    // }, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(audioTimeout);
      // clearTimeout(readingTimeout);
      if (isReading && speaker) {
        speaker.stopSpeaking();
        setIsReading(false);
      }
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

    };
    // eslint-disable-next-line react-hooks/exhaustive-deps   
  }, [isReading])

  return (
    <div className='w-screen h-screen bg-slate-300 p-5 flex flex-col justify-center items-center'>
      <p className='text-center text-4xl font-medium underline underline-offset-3'>{contentkey}</p>

      {/* <div className='m-5'>
        <p className='font-medium text-justify'>{TopicsData[content]['contents'][contentkey]["content"]}</p>
      </div> */}

    </div>
  )
}

export default SingleContent
