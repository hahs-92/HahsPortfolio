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
        <>
            { 
                darkMode 
                    ?   
                        <footer className="Footer Footer--dark" id='contact'>
                            <article className='Footer-wrapper'>
                                <h2>Contactame</h2>
                                <ContactForm />
                                <div className='icons-wrapper'>
                                    <a href="https://www.facebook.com" target="_blank" title="facebook">
                                        <IconFacebook width='80' height='80' fill='#64C4D7' />
                                    </a>
                                    <a href="https://www.github.com" target="_blank" title="github">
                                        <IconGithub width='80' height='80' fill='#64C4D7'/>
                                    </a>
                                </div>
                            </article>
        
                        </footer>
                    : 
                        <footer className="Footer" id='contact'>
                            <article className='Footer-wrapper'>
                                <h2>Contactame</h2>
                                <ContactForm />
                                <div className='icons-wrapper'>
                                    <a href="https://www.facebook.com/alexander.hernandezserrano/" target="_blank" rel='noopener' title="facebook">
                                        <IconFacebook width='80' height='80'/>
                                    </a>
                                    <a href="https://github.com/hahs-92" target="_blank" rel='noopener' title="github">
                                        <IconGithub width='80' height='80'/>
                                    </a>
                                </div>

                            </article>
                        </footer>
            }
        </>
    )
}

export default Footer