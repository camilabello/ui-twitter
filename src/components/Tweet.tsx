import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import {useNavigate} from 'react-router-dom'
import './Tweet.css';
import camila from '../assets/camila.jpg'

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  const navigate = useNavigate()

  function navigateToStatus() {
    navigate('/status', {
      state: {
        content: props.content
      }
    })
  }

  return (
    <div onClick={navigateToStatus} className="tweet">
      <img src={camila} alt="Camila Bello" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Camila Bello</strong>
          <span>@cami.bello</span>
        </div>
        <p>{props.content}</p>
          
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />   
            20   
          </button>

          <button type="button">
            <ArrowsClockwise />   
            20   
          </button>

          <button type="button">
            <Heart />   
            20   
          </button>

        </div>
      </div>
    </div>
  )
}