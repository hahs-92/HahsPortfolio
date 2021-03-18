//COMPONENTS
import ListProyects from '../components/ListProyects'

// _______________________________________________________________________


const Home = () => {
    return(
        <>
            <h1>Hola Mundo Home</h1>
            <header>
                <i>
                    <img src="" alt="Logo-hahs"/>
                </i>
            </header>

            <nav>
                <ul>
                    <li>Projectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>

            <section>
                <div></div>
                <div></div>
                <img src="" alt=""/>
                <h1>Hola, soy Alex Hernández Serrano</h1>
                <h2>Desarrollador Web Front-end</h2>
                <button>
                    <a href="/resume">Curriculum</a>
                </button>
            </section>

            <section>
                <ListProyects />
            </section>
        </>
    )
}

export default Home