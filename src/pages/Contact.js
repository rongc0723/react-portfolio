import './Contact.css'
export default function Contact() {

  return (
    <div className='contact'>
        <div className='map'>
        <iframe title="hojo" width="100%" height="300" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.667442268153!2d-71.10618649999999!3d42.3496131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379487ade92d7%3A0x1dea8c49371209ff!2s726%20Commonwealth%20Ave%2C%20Boston%2C%20MA%2002215!5e0!3m2!1sen!2sus!4v1686191267052!5m2!1sen!2sus"></iframe>
        </div>
        <div className='contact-info'>
          <h1>Contact Me</h1>
          <ul>
            <li><a href='https://www.linkedin.com/in/rong-chen-421b9b219/' target='blank'>🔗 Linkedin </a></li>
            <li><a href='https://github.com/rongc0723' target='blank'>🔗 Github </a></li>
            <li><a href='https://www.instagram.com/derpy_rong/' target='blank'>🔗 Instagram </a></li>
            <li><a href='mailto:rongc@bu.edu'>📧 rongc@bu.edu</a></li>
            <li>📍 726 Commonwealth Avenue<br/>Boston, MA 02215</li>
          </ul>
        </div>
    </div>
  )
}
