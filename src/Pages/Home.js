import React from 'react'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function Home() {
  return (
    <div style={{ maxWidth:'960px', padding:'15px', margin:'auto'}}>
        
            <Header/>
            <Button title='Twitter Link' link=''/>
            <Button title='Zuri Team' link='https://training.zuri.team/' id='btn__zuri'/>
            <Button title='Zuri Books' link='http://books.zuri.team' id='books'/>
            <Button title='Python Books' link='https://books.zuri.team/' id='book__python'/>
            <Button title='Background Check for Coders' link='https://background.zuri.team/' id='pitch'/>
            <Button title='Design Books' link='https://books.zuri.team/design-rules' id='book__design'/>
            <Footer/>
        
    </div>
  )
}

export default Home