//STYLES
import '../styles/components/CardProyect.scss'

//ASSETS
import PlatzaViideo from '../assets/platzi-video.png'


const CardProyects = () => {
    return (
        <article className='CardProyect'>
            <div className='CardProyect_img'>
                <img src={ PlatzaViideo } alt="imagen-proyect"/>
            </div>

            <section className='CardProyect_text'>
                <h3>Nombre Proyect</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde pariatur aut hic inventore? Totam repudiandae veniam, porro nisi alias tempora dolore quaerat voluptatum optio non natus quod autem quia!
                Beatae exercitationem quod sint in blanditiis. Rerum qui cum sapiente necessitatibus porro optio deleniti eum omnis reiciendis iste eos nobis itaque beatae, quo atque quaerat ullam saepe. Voluptas, eligendi tempora.</p>
            </section>

            <div className='CardProyect_Icons'>
                <i></i>
            </div>

            <button>Ver</button>
        </article>

    )
}

export default CardProyects