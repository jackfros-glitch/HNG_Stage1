
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
    {location.pathname === '/contact' && <h1 style={{padding:'10px', paddingBottom:'0px', fontSize:'36px', fontWeight:'600', color:'#101828'}}>Contact Me</h1>}
    </>
    
  )
}

export default Header