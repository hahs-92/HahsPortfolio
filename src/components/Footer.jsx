//STYLES
import '../styles/components/Footer.scss'

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
                </form>
            </article>

            <div>
                <i></i>
            </div>
        </footer>
    )
}

export default Footer