//DEPENDECIAS
import { useContext } from 'react'

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
                        <footer className="Footer Footer--dark ">
                            <article className='Footer-wrapper'>
                                <h2>Contactame</h2>
            
                                <form action="">
                                    <label htmlFor="">Correo Electronico</label>
                                    <input type="email" placeholder='Correo Electronico'/>
                                    <label htmlFor="">Mensaje</label>
                                    <textarea name="" id="" cols="30" rows="5" placeholder='Mensage'></textarea>
                                    <input className='Button' type="submit" value='Enviar'/>
                                </form>
                                
                                <div className='icons-wrapper'>
                                    <a href="https://www.facebook.com" target="_blank" title="facebook">
                                        <IconFacebook />
                                    </a>
                                    <a href="https://www.github.com" target="_blank" title="github">
                                        <IconGithub />
                                    </a>
                                </div>
                            </article>
        
                        </footer>
                    :
                        <footer className="Footer">
                            <article className='Footer-wrapper'>
                                <h2>Contactame</h2>
            
                                <form action="">
                                    <label htmlFor="email">Correo Electronico</label>
                                    <input type="email" id='email' placeholder='Correo Electronico'/>
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Mensage'></textarea>
                                    <input className='Button' type="submit" value='Enviar'/>
                                </form>
                                
                                <div className='icons-wrapper'>
                                    <a href="https://www.facebook.com/alexander.hernandezserrano/" target="_blank" rel='noopener' title="facebook">
                                        <IconFacebook />
                                    </a>
                                    <a href="https://github.com/hahs-92" target="_blank" rel='noopener' title="github">
                                        <IconGithub />
                                    </a>
                                </div>
                            </article>
                        </footer>
            }
        </>
    )
}

export default Footer