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
                        <h1>Hola, soy Alex Hernández Serrano</h1>
                        <h2>Desarrollador Web Front-end</h2>
                        <button className='Button'>
                            <a href="/resume">Curriculum</a>
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