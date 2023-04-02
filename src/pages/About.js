import './About.css';


export default function About() {
  return (
    <div className='about'>
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
            <li>Python</li>
            <li>JavaScript</li>
            <li>HTML&CSS</li>
            <li>React</li>
            <li>Git&Github</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Bash</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
