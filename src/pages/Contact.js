import './Contact.css'
export default function Contact() {

  return (
    <div className='contact'>
        <div className='map'>
        <iframe title="hojo" width="100%" height="300" frameborder="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=575%20Commonwealth%20Ave+(Dorm)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">Hojo</a>
        </iframe>
        </div>
        <div className='contact-info'>
          <h1>Contact Me</h1>
          <ul>
            <li><a href='https://www.linkedin.com/in/rong-chen-421b9b219/' target='blank'>🔗 Linkedin </a></li>
            <li><a href='https://github.com/rongc0723' target='blank'>🔗 Github </a></li>
            <li><a href='https://www.instagram.com/derpy_rong/' target='blank'>🔗 Instagram </a></li>
            <li><a href='mailto:rongc@bu.edu'>📧 rongc@bu.edu</a></li>
            <li>📍 575 Commonwealth Avenue<br/>Boston, MA 02215</li>
          </ul>
        </div>
    </div>
  )
}
