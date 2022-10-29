import React from 'react'
import i4g from '../images/I4G.png'
import zuri from '../images/Zuri.png'
import slack from '../images/slack.png'
import github from '../images/github.png'

function Footer() {
  return (
    <div className=''>
        <div className='social_icons' hidden>
            <img src={slack} alt="slack icon" style={{marginRight:'20px'}}/>
            <img src={github} alt="github icon" />
        </div>

        <div className='footer'>
            <p><img src={zuri} alt="Zuri internship logo"/></p>
            <p style={{textSize:'16px', fontWeight:400, opacity:0.5}}>HNG Internship 9 Frontend Task</p>
            <p><img src={i4g} alt="Ingressive for good logo" /></p>
        </div>
    </div>
  )
}

export default Footer