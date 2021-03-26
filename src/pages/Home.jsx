//DEPENDENCIAS
import { Link } from 'react-router-dom'
import { useContext } from 'react'

//COMPONENTS
import ListProyects from '../components/ListProyects'

//CONTEXT
import AppContext from '../context/AppContext'

//STYLES
import '../styles/pages/Home.scss'

//IMAGES
import Hero from '../assets/image-hero.png'

// _______________________________________________________________________


const Home = () => {

    const { setIsHome } = useContext(AppContext)

    const handleClick = () => {
        setIsHome(false)
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
                    <button className='Button' aria-label='Button para ver el resume'>
                            <Link to="/resume" onClick={ handleClick }>Curriculum</Link>
                    </button>
                </div>
            </section>

            <section className='ListProyects' id='proyects'>
                <ListProyects />
            </section>

        </main>
    )
}

export default Home