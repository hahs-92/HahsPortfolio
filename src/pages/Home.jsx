//COMPONENTS
import ListProyects from '../components/ListProyects'

//STYLES
import '../styles/pages/Home.scss'

// _______________________________________________________________________


const Home = () => {
    return(
        <>
            
            <section className= 'Hero-wrapper'>
                <div className='Hero-square-right'></div>
                <div className='Hero-square-left'></div>
                <img className='Hero-imagem' src="" alt="picture"/>
                <h1>Hola, soy Alex Hernández Serrano</h1>
                <h2>Desarrollador Web Front-end</h2>
                <button className='Button'>
                    <a href="/resume">Curriculum</a>
                </button>
            </section>

            <section className='ListProyects'>
                <ListProyects />
            </section>

        </>
    )
}

export default Home