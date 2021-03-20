//ASSETS
import Logo from '../assets/Logo.svg'

const Header = () => {
    return(
        <>
            <header className='Header'>
                <i>
                    <img src={ Logo } alt="Logo-hahs" width= '150' height= '150'/>
                </i>
            </header>

            <nav>
                <ul>
                    <li>
                        <a href="#">Proyectos</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default Header