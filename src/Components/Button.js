import React from 'react'
import { Link } from 'react-router-dom'

function Button({title, link, id, externalLink}) {
  return (
    <div style={{backgroundColor:'#EAECF0', textAlign:'center', padding:'24px 32px', borderRadius:'8px', marginTop:'8px'}}>
        {externalLink ? <a id={id} href={link} style={linkStyle} target='_blank'>{title}</a> : <Link to={link} id={id} style={linkStyle}>{title}</Link>}</div>
  )
}

 const linkStyle = {
    textDecoration:'none',
    color:'#101828',
    fontSize:'18px',
    fontFamily:'Inter',
    fontWeight:'500'
}

export default Button