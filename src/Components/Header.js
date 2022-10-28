import React from 'react'
import img from '../images/profile__img.png'
function Header() {
  return (
    <div style={{textAlign:'center'}}>
        <img id='profile_img' src={img} alt="" style={{height:100, borderRadius:50, objectFit:'cover'}} />
        <p id='twitter'>Annete Black</p>
        <p id='slack' hidden>Slack username</p>
    </div>
  )
}

export default Header