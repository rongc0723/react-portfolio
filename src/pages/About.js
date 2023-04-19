import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faHtml5, 
  faReact, 
  faGit, 
  faPhp,
  faCss3Alt,
  faLinux,
  faJava,
  faJsSquare, } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

export default function About() {
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
    <div className={`about ${showComponent ? 'show' : ''}`}>
      <div className='about-wrapper'>
        <div className='description'>
          <h1>About Me</h1>
          <p>
            Hello, and welcome to my React portfolio website! My name is Rong Chen, and I am a passionate web developer with a strong background in React and other front-end technologies.
            I love building beautiful and responsive web applications that not only look great but also provide seamless user experiences. I am always looking for ways to improve my skills and stay up-to-date with the latest trends and best practices in web development.
            Aside from coding, I enjoy traveling, weight lifting, and playing basketball.
          </p>
        </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ul>
            <li><FontAwesomeIcon icon={faReact} beat size='2xl'/></li>
            <li><FontAwesomeIcon icon={faHtml5} beat size='2xl'/></li>
            <li><FontAwesomeIcon icon={faCss3Alt} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faJsSquare} beat size="2xl"/></li>
            <li><FontAwesomeIcon icon={faPython} beat size='2xl'/></li>
            <li><FontAwesomeIcon icon={faJava} beat size="2xl" /></li>
            <li><FontAwesomeIcon icon={faGit} beat size="2xl" /></li>
            <li><FontAwesomeIcon icon={faPhp} beat size="2xl" /></li>
            <li><FontAwesomeIcon icon={faLinux} beat size="2xl" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
