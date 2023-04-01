import './Home.css'
import img from '../assets/photo.jpg'
import Typewriter from 'typewriter-effect';
import whoConfig from '../config/whoConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import resume from '../assets/rc-resume.pdf'
export default function Home() {
  return (
    <div className='content'>
      <img src={img} alt="baby"/>
      <div className='info'>
        <h1>Hi, I'm Rong Chen</h1>
        <h2>I'm a <span className='typewriter'><Typewriter options={whoConfig}/></span></h2>
        <ul>
          <li>based in New York, USA</li>
          <li>Student at Boston University</li>
          <li>rongc@bu.edu</li>
        </ul>
        <div className='socials'>
          <a href={resume} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faFilePdf} size='2xl'/>
          </a>
          <a href='https://www.linkedin.com/in/rong-chen-421b9b219/' target='blank'>
          <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
          </a>
          <a href='https://github.com/rongc0723' target='blank'>
          <FontAwesomeIcon icon={faGithub} size='2xl'/>
          </a>
        </div>
      </div>
    </div>
  )
}
