import React from 'react'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Home() {
  return (
    <div style={{ maxWidth:'960px', padding:'15px', margin:'auto'}}>
        
            <Header/>
            <Button title='Twitter Link' link='' externalLink = {true} />
            <Button title='Zuri Team' link='https://training.zuri.team/' id='btn__zuri' externalLink = {true} />
            <Button title='Zuri Books' link='http://books.zuri.team' id='books' externalLink = {true} />
            <Button title='Python Books' link='https://books.zuri.team/' id='book__python' externalLink = {true} />
            <Button title='Background Check for Coders' link='https://background.zuri.team/' id='pitch' externalLink = {true} />
            <Button title='Design Books' link='https://books.zuri.team/design-rules' id='book__design' externalLink = {true} />
            <Button title='Contact Me' link='/contact' id='contact'/>
            <Footer/>
        
    </div>
  )
}

export default Home