
import img from '../images/profile__img.png'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  return (
    <>
    {location.pathname === '/' && <div style={{textAlign:'center'}}>
        <img id='profile_img' src={img} alt="" style={{height:100, borderRadius:50, objectFit:'cover'}} />
        <p id='twitter'>Annete Black</p>
        <p id='slack' hidden>Slack username</p>
    </div>}
    {location.pathname === '/contact' && <h1>Contact Me</h1>}
    </>
    
  )
}

export default Header