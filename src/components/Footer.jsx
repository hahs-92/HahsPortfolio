//STYLES
import '../styles/components/Footer.scss'

//ICONS
import iconFacebook from '../assets/icon-facebook.svg'
import iconGithub from '../assets/icon-github.svg'

// _______________________________________________________________


const Footer = () => {
    return (
        <footer className='Footer'>
            <article className='Footer-wrapper'>
                <h3>Contactame</h3>

                <form action="">
                    <label htmlFor="">Correo Electronico</label>
                    <input type="email"/>
                    <label htmlFor="">Mensaje</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <input className='Button' type="submit" value='Enviar'/>
                </form>
                
                <div className='icons-wrapper'>
                    <i>
                        <img src={ iconFacebook } alt="Logo-facebook"/>
                    </i>
                    <i>
                        <img src={ iconGithub } alt="Logo-github"/>
                    </i>
                </div>
            </article>

        </footer>
    )
}

export default Footer