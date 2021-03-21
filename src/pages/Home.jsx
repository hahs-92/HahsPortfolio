//DEPENDENCIAS
import { Link } from 'react-router-dom'

//COMPONENTS
import ListProyects from '../components/ListProyects'

//STYLES
import '../styles/pages/Home.scss'

//IMAGES
import Hero from '../assets/image-hero.png'

// _______________________________________________________________________


const Home = () => {
    return(
        <>
            
            <section className= 'Hero-wrapper'>
                <div className='Hero-right'>
                    <div className='Hero-right_wrapper'>
                        <img src={ Hero } alt="picture" />   
                    </div>
                </div>
                <div className='Hero-left'></div>
                <div className='Hero_text'>
                    <h1>Hola, soy<strong> Alex Hernández Serrano</strong></h1>
                    <h2>Desarrollador Web Front-end</h2>
                    <button className='Button'>
                            <Link to="/resume">Curriculum</Link>
                    </button>
                </div>
            </section>

            <section className='ListProyects'>
                <ListProyects />
            </section>

        </>
    )
}

export default Home