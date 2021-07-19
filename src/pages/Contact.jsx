//COMPONENTES
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
//ESTILOS
import '../styles/pages/Contact.scss'

const Contact = () => {
    return (
        <section className='Contact'>
            <ContactForm />
            <Footer />
        </section>
    )
}

export default Contact