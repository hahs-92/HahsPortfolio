//COMPONNETS
import CardSkills from '../components/CardSkills'
import CardSoftSkills from '../components/CardSoftSkills'
import CardLanguages from '../components/CardLanguages'
import CardSoftwares from '../components/CardSoftwares'
import CardHobbies from '../components/CardHobbies'

//ASSESTS
import imageHero from '../assets/Hero2.png'

//STYLES
import '../styles/pages/Resume.scss'
import CardSoftware from '../components/CardSoftwares'

// ____________________________________________________________________________________


const Resume = () => {
     return(
        <section className='Resume'>
            <article className='Hero2-wrapper'>  

                <div className='Hero2-wrapper_right'>
                    <img src={ imageHero } alt="image-hero"/>   
                </div>
                
                <div className='Hero2-wrapper_left'>
                    <h1>Alex Hernández Serrano</h1>
                    <h2>Desarollador Web Front-end</h2>
                </div>

                {/* <div className='Hero2-wrapper_text'>
                    <h1>Alex Hernández Serrano</h1>
                    <h2>Desarollador Web Front-end</h2>
                </div> */}
            </article>

            <article className='Aboutme'>
                <h2>Sobre Mí</h2>
                <p>Mi nombre es Alex Hernandez Serrano,
                    Desarrollador Front-end junior, con conocimientos  en  javaScript , html, css,  y de librerías, preprocesadores (react,sass). Soy una persona responsable y comprometida , me  gusta trabajar en equipo y asumir riesgos, me apasiona aprender nuevas cosas y nunca dejar de aprender. Mi principal objetivo es desarrollar mis habilidades a travez del desarrollo de productos interesantes y apasionantes. Estoy en busqueda de oportunidades que me permitan seguir creciendo como desarrollador y cumplir mis objetivos , asi como aportar valor al sector.</p>
            </article>

            <article className='Info'>
                <CardSkills />
                <CardSoftSkills />
                <CardLanguages />
                <CardSoftwares />
                <CardHobbies />

            </article>
        </section>
     )
}

export default Resume