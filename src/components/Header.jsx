//DEPENDENCIAS
import { Link } from 'react-router-dom'
import { useContext } from 'react'

//COMPONENTS
import IconLogo from './IconLogo'
import Switch from './Switch'

//CONTEXT
import AppContext from '../context/AppContext'

//STYLES
import '../styles/components/Header.scss'

// _______________________________________________________________________________________


const Header = () => {

    const { darkMode, setDarkMode } = useContext(AppContext)
    const { isHome, setIsHome } = useContext(AppContext)
    let theme =''

    const handleClick = () => {
        setIsHome(true)
    }

    const handleClickButton = () => {
        setDarkMode(!darkMode)
    }


    return(
        <>
            {
                darkMode ? theme='dark' : ''
            }

            <header className={ `Header Header--${ theme }` }>
                <div className="Header_icon" >
                    <IconLogo/>
                </div>
                <nav className='Nav'>
                    <ul className='Nav_wrapper'>
                        
                        {
                            isHome
                                ? 
                                <li>
                                    <Link to="#">Proyectos</Link>
                                </li>
                                :
                                <li>
                                    <Link to="/" onClick={ handleClick }>Inicio</Link>
                                </li>           
                        }

                        <li>
                            <Link to="#">Contacto</Link>
                        </li>

                        <li>
                            {/* <button onClick={ handleClickButton }>Dark</button> */}
                            <Switch onClick={ handleClickButton } />
                        </li> 
                    </ul>
                </nav>
            </header>

        </>

    )
}

export default Header