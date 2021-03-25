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
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" placeholder="Nombre" required/>
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" placeholder='Correo Electronico' id="email" name="email" required/>
            <label htmlFor="subject">Asunto</label>
            <input type="text" name="subject" id="subject" placeholder="Asunto"/>
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="5" placeholder='Mensage' required/>
            <input className='Button' type="submit" value='Enviar'/>
        </form>

    )
}

export default ContactForm