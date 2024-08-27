import './Projects.css'
import sfoodify from '../assets/sfoodify.png'
import webscraper from '../assets/webscraper.png'
import raft from '../assets/raft.png'
import spotme from '../assets/spotme.png'
import bhacks from '../assets/bhacks.png'
import quantly from '../assets/quantly.png'
import { useEffect, useState } from 'react'
import ai from '../assets/ai.png'


export default function Projects() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={`project-section ${showComponent ? 'show' : ''}`}>
      <div class="grid-container">
        <div class="grid-item">
          <h1>Map Reduce and Raft</h1>
          <a href='https://github.com/rongc0723/mr-and-raft' target='blank'><img src={raft} alt='raft project'/></a>
          <p>Reverse engineered and reimplimented basic version of Map Reduce and Raft Consensus Algorithm in Go</p>
        </div>
        <div class="grid-item">
          <h1>Quantly</h1>
          <a href='https://learnquantly.com/' target='blank'><img src={quantly} alt='quantly'/></a>
          <p>Launched a website for students to practice computational finance</p>
        </div>
        <div class="grid-item">
          <h1>Boston Hacks Website</h1>
          <a href='https://bostonhacks.org/' target='blank'><img src={bhacks} alt='boston hacks website'/></a>
          <p>Developed the website for the annualy hosted hackathon for boston hacks</p>
        </div>
        <div class="grid-item">
          <h1>Sfoodify</h1>
          <a href='https://github.com/rongc0723/CS411-Project' target='blank'><img src={sfoodify} alt='sfoodify project'/></a>
          <p>Webapp that generate curated playlists and recipes for users using Spotify and Spoonacular API</p>
        </div>
        <div class="grid-item">
          <h1>Spot-Me</h1>
          <a href='https://github.com/CS392/Spot-Me' target='blank'><img src={spotme} alt='spot me project'/></a>
          <p>Webapp that allows users to schedule workouts and share progress with friends</p>
        </div>
        <div class="grid-item">
          <h1>Tetris AI Bot</h1>
          <a href='https://github.com/rongc0723/tetris-ai' target='blank'><img src={ai} alt='tetris ai project'/></a>
          <p>Developed and trained a tetris AI with deep reinforcement learning</p>
        </div>
        <div class="grid-item">
          <h1>Marciano Web Scraper</h1>
          <a href='https://github.com/rongc0723' target='blank'><img src={webscraper} alt='webscraper project'/></a>
          <p>Python program that allows students to quickly get menu items and important nutrition facts</p>
        </div>
      </div>
    </div>
  )
}
