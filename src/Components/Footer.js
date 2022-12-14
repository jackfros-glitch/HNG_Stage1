import React from 'react'
import i4g from '../images/I4G.png'
import zuri from '../images/Zuri.png'
import slack from '../images/slack.png'
import github from '../images/github.png'
import { useLocation } from 'react-router-dom'

function Footer() {

  const location = useLocation()
  
  return (
    <footer className=''>
        {location.pathname === '/' && <div className='social_icons'>
            <img src={slack} alt="slack icon" style={{marginRight:'20px'}}/>
            <img src={github} alt="github icon" />
        </div>}

        <div className='footer'>
            <p><img src={zuri} alt="Zuri internship logo"/></p>
            <p style={{textSize:'16px', fontWeight:400, opacity:0.5}}>HNG Internship 9 Frontend Task</p>
            <p><img src={i4g} alt="Ingressive for good logo" /></p>
        </div>
    </footer>
  )
}

export default Footer