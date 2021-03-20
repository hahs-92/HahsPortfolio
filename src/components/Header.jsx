//ASSETS
import Logo from '../assets/Logo.svg'

//STYLES
import '../styles/components/Header.scss'

// _______________________________________________________________________________________


const Header = () => {
    return(
        <>
            <header className='Header'>
                <i className='Header_icon'>
                    <img src={ Logo } alt="Logo-hahs" width= '70' height= '70'/>
                </i>
                <nav className='Nav'>
                    <ul className='Nav_wrapper'>
                        <li>
                            <a href="#">Proyectos</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </header>

        </>

    )
}

export default Header