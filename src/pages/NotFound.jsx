import { Link } from 'react-router-dom'

//STYLES
import '../styles/pages/NotFound.scss'


const NotFound = () => {
    return(
        <section className='NotFound'>
            <div className='NotFound_text'>
                <Link to='/'>Ir a Inicio</Link>
            </div>
            <div className='NotFound_image'>
                <img src="https://image.freepik.com/vector-gratis/concepto-landing-page-fallo-tecnico_23-2148249256.jpg" alt="NotFound"/>
            </div> 
        </section>
    )
}

export default NotFound 