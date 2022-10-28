import React from 'react'

function Button({title, link, id}) {
  return (
    <div style={{backgroundColor:'#EAECF0', textAlign:'center', padding:'24px 32px', borderRadius:'8px', marginTop:'8px'}}>
        <a id={id} href={link} style={linkStyle}>{title}</a></div>
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