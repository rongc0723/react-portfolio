import './Projects.css'
import memory from '../assets/memory.png'
import sfoodify from '../assets/sfoodify.png'
import recipe from '../assets/recipe.png'
import finance from '../assets/finance.png'


export default function Projects() {
  return (
    <div className='project-section'>
      <div class="grid-container">
        <div class="grid-item">
          <h1>Sfoodify</h1>
          <img src={sfoodify} alt='sfoodify project'/>
          <p>Utilized Spotify and Spooancular API to generate curated playlists and recipes for an authorized user.</p>
        </div>
        <div class="grid-item">
          <h1>Memory Game</h1>
          <img src={memory} alt='memory-game project'/>
          <p>Recreated the classic memory flip game where users flip cards at an attempt to match them</p>
        </div>
        <div class="grid-item">
          <h1>Recipe Book</h1>
          <img src={recipe} alt='recipe book project'/>
          <p>Webapp that allows an user to create recipes and search for recipes on a local json database</p>
        </div>
        <div class="grid-item">
          <h1>Finance Tracker</h1>
          <img src={finance} alt='webscraper project'/>
          <p>Webapp that allows users to keep track of their spendings</p>
        </div>
      </div>
    </div>
  )
}
