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
import imageHero from '../assets/image-hero.png'

//STYLES
import '../styles/pages/Resume.scss'

// ____________________________________________________________________________________


const Resume = () => {

    const { darkMode } = useContext(AppContext)

    return(
        <section className='Resume'>
            <article className='Hero2-wrapper'>  
                <div className={darkMode ? 'Hero2-wrapper_right --dark' : 'Hero2-wrapper_right'}>
                    <img src={ imageHero } alt="image-hero"/>   
                </div>
                
                <div className='Hero2-wrapper_left'>
                    <h1>Alex Hernández Serrano</h1>
                    <h2>Front-end Web Developer</h2>
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
                        <h2>About me</h2>
                        <p>My name is Alex Hernández Serrano. I am an enthusiast
                        dev. I love programming, soccer, and video games. I have bits of knowledge in Front-end technologies, such as HTML, CSS, JavaScript, TypeScript, React, and some knowledge in Back-end technologies such as Node.js and MongoDB. I have built several projects with this stack; you can find some of them on my portfolio.</p>
                    </article>
                    :
                    <article className='Aboutme'>
                        <h2>Sobre Mí</h2>
                        <p>My name is Alex Hernández Serrano. I am an enthusiast
                        dev. I love programming, soccer, and video games. I have bits of knowledge in Front-end technologies, such as HTML, CSS, JavaScript, TypeScript, React, and some knowledge in Back-end technologies such as Node.js and MongoDB. I have built several projects with this stack; you can find some of them on my portfolio.</p>
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