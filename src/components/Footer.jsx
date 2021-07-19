//DEPENDECIAS
import { useContext } from 'react'

//COMPONNETS
import ContactForm from './ContactForm'

//CONTEXT
import AppContext from '../context/AppContext'

//STYLES
import '../styles/components/Footer.scss'

//ICONSCOMPONENTS
import IconFacebook from './IconFacebook'
import IconGithub from './IconGithub'

// _______________________________________________________________


const Footer = () => {

    const { darkMode } = useContext(AppContext)

    return ( 
        <footer className={ darkMode ? "Footer Footer--dark" : "Footer"} id='contact'>
            <article className='Footer-wrapper'>
                {/* <h2>Contactame</h2>
                <ContactForm /> */}
                <div className='icons-wrapper'>
                    <a href="https://www.facebook.com/alexander.hernandezserrano/" target="_blank" title="facebook">
                        { darkMode ? <IconFacebook width='80' height='80' fill='#64C4D7' /> : <IconFacebook width='80' height='80'/>}
                    </a>
                    <a href="https://github.com/hahs-92" target="_blank" title="github">
                        { darkMode ? <IconGithub width='80' height='80' fill='#64C4D7'/> : <IconGithub width='80' height='80'/>}
                    </a>
                </div>
            </article>

        </footer>
    )
}

export default Footer