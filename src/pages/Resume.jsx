//DEPENDECIAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//COMPONNETS
import CardSkills from '../components/CardSkills'
import CardSoftSkills from '../components/CardSoftSkills'
import CardLanguages from '../components/CardLanguages'
import CardSoftwares from '../components/CardSoftwares'
import CardHobbies from '../components/CardHobbies'
import IconWhatsapp from '../components/IconWhatsapp'
import CardCourses from '../components/CardCourses'

//ASSESTS
import imageHero from '../assets/Hero2.png'

//STYLES
import '../styles/pages/Resume.scss'

// ____________________________________________________________________________________


const Resume = () => {

    const { darkMode } = useContext(AppContext)

    return(
        <section className='Resume'>
            <article className='Hero2-wrapper'>  
                <div className='Hero2-wrapper_right'>
                    <img src={ imageHero } alt="image-hero"/>   
                </div>
                
                <div className='Hero2-wrapper_left'>
                    <h1>Alex Hernández Serrano</h1>
                    <h2>Desarollador Web Front-end</h2>
                    <div className="Icon-whatsapp">
                        <IconWhatsapp />
                        <h3>321 9357540</h3>
                    </div>
                </div>

                {/* <div className='Hero2-wrapper_text'>
                    <h1>Alex Hernández Serrano</h1>
                    <h2>Desarollador Web Front-end</h2>
                </div> */}
            </article>

            {
                darkMode
                    ?
                    <article className='Aboutme Aboutme--dark'>
                        <h2>Sobre Mí</h2>
                        <p>Mi nombre es Alex Hernández Serrano,
                            entusiasta desarrollador front-end junior.
                            Tengo conocimientos en html, css, javaScript y react, obtenidos por medio de cursos que he tomado, en su mayoria de forma autodidacta. Soy un apasionado del aprendizaje constante, lo cual me ha permitido adquirir diversos conocimientos, orientados al desarrollo web.Me gusta escribir codigo limpio y claro, así como desarrollar aplicaciones accesibles a todos los usuarios.He construido proyectos donde he puesto en practica mis conocimientos y estoy en busca de oportunidades que permitan seguir mejorando mis habilidades como desarrollador </p>
                    </article>
                    :
                    <article className='Aboutme'>
                        <h2>Sobre Mí</h2>
                        <p>Mi nombre es Alex Hernández Serrano,
                            entusiasta desarrollador front-end junior.
                            Tengo conocimientos en html, css, javaScript y react, obtenidos por medio de cursos que he tomado, en su mayoria de forma autodidacta. Soy un apasionado del aprendizaje constante, lo cual me ha permitido adquirir diversos conocimientos, orientados al desarrollo web.Me gusta escribir codigo limpio y claro, así como desarrollar aplicaciones accesibles a todos los usuarios.He construido proyectos donde he puesto en practica mis conocimientos y estoy en busca de oportunidades que permitan seguir mejorando mis habilidades como desarrollador </p>
                    </article>
            }

            <article className='Info'>
                <CardSkills />
                <CardSoftSkills />
                <CardCourses />
                <CardLanguages />
                <CardSoftwares />
                <CardHobbies />
            </article>
        </section>
     )
}

export default Resume