import Header from "../Components/Header"
import ContactForm from "../Components/ContactForm"
import Footer from "../Components/Footer"

function Contact() {
  return (
    <div className="container flex flex-col center" style={{paddingInline:'48px'}}>
      <div className="box">
        <Header/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact