//DEPENDENCIAS
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
//CONTEXT
import AppContext from '../context/AppContext'
//STYLES
import '../styles/pages/Home.scss'
//IMAGES
import Hero from '../assets/image-hero.png'

// _______________________________________________________________________


const Home = () => {

    const { setIsHome, darkMode } = useContext(AppContext)
    let history = useHistory()

    const handleClick = () => {
        setIsHome(false)
        history.push('/resume')
    }

    return(
        <main className= 'Home'>
            
            <section className= 'Hero-wrapper'>
                <div className='Hero-right'>
                    <div className='Hero-right_wrapper'>
                        <img src={ Hero } alt="picture"  loading='lazy'/>   
                    </div>
                </div>
                <div className='Hero-left'></div>
                <div className='Hero_text'>
                    <h1>Hola, soy<strong> Alex Hernández Serrano</strong></h1>
                    <h2>Desarrollador Web Front-end</h2>
                     <button 
                        className={ darkMode ? 'Button Button--Dark' : `Button`} aria-label='Button para ver el resume'
                        onClick={ handleClick }    
                    >
                        Resume
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home