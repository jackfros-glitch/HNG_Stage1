import Header from "../Components/Header"
import ContactForm from "../Components/ContactForm"

function Contact() {
  return (
    <div className="container flex flex-col center" style={{paddingInline:'48px'}}>
      <div className="box">
        <Header/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact