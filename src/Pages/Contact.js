import Header from "../Components/Header"
import ContactForm from "../Components/ContactForm"
import Footer from "../Components/Footer"

function Contact() {
  return (
    <div style={{maxWidth:'960px', padding:'15px', margin:'auto'}}>
      
      <div className="contact-container flex flex-col center" >
        <div className="box">
          <Header/>
          <ContactForm/>
      
        </div>
        
      </div>
      <Footer/>
    </div>
    
  )
}

export default Contact