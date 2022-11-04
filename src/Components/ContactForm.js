

function ContactForm() {
  return (
    <div className=""><form action="" style={{maxWidth:'50rem'}} className="form" >
    <p style={{color:'#475467'}}>Hi there, contact me to ask me about anything you have in mind</p>
    <div style={{display:'flex', marginBottom:'15px'}}>
        <div style={{flexGrow:1, marginRight:'7px'}}><label className="label"  htmlFor="firstname">First name</label><input type="text" className="input-text rounded " id="first_name" placeholder="Enter your first name" /></div>
        <div style={{flexGrow:1, marginLeft:'7px'}}><label  htmlFor="lastname" className="label">Last name</label><input type="text" id="last_name" className="input-text rounded" placeholder="Enter your last name"/></div>
    </div> 
    <div style={{marginBottom:'15px'}}>
        <div style={{flexGrow:1}}><label className="label"  htmlFor="email">Email</label><input className="input-email rounded" type="email" id="email" placeholder="yourname@email.com" /></div>
    </div> 
    <div style={{marginBottom:'15px'}}>
    <div style={{flexGrow:1}}><label className="label"  htmlFor="message">Message</label><textarea className="input-textarea rounded" id="message" placeholder="Send a message and I'll reply you as soon as possible..." cols={40} rows={5} style={{}} /></div>
    </div>
    <div style={{}}>
    <div style={{flexGrow:1}}><input type="checkbox" name="agree_checkbox" id="agree_checkbox" /> <span style={{color:'#475467'}}>You agree to providing your data to Manasseh who may contact you</span></div>
    </div>
    <div style={{marginTop:'30px'}}>
        <input type="submit" value='Send message' id="btn_submit" className="rounded input-submit" />
    </div>

    </form></div>
  )
}

export default ContactForm