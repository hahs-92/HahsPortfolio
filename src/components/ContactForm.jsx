import emailjs from 'emailjs-com';

//STYLES
import '../styles/components/ContactForm.scss'

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ttshb7q', 'template_06ddntp', e.target, 'user_QiDmW3xG9QJrfyyqkvbiq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <form onSubmit={ sendEmail } className="ContactForm">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" required/>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' id="email" name="email" required/>
            <label htmlFor="subject">subject</label>
            <input type="text" name="subject" id="subject" placeholder="Subject"/>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5" placeholder='Message' required/>
            <input className='Button' type="submit" value='Contact me¡'/>
        </form>

    )
}

export default ContactForm