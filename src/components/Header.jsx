//DEPENDENCIAS
import { Link, useHistory } from 'react-router-dom'
import { useContext, useEffect } from 'react'
//COMPONENTS
import IconLogo from './IconLogo'
import Switch from './Switch'
//CONTEXT
import AppContext from '../context/AppContext'
//STYLES
import '../styles/components/Header.scss'

// _______________________________________________________________________________________


const Header = () => {
    let history = useHistory()

    const { darkMode, setDarkMode } = useContext(AppContext)

    //USE EFFECTS PARA MANEJAR SI EL USUARIO ESTA EN MODO OSCURO
    useEffect(() => {
        let local = localStorage.getItem('darkMode','true')
        if(local === 'true'){
            setDarkMode(true)
        }
        else{
            setDarkMode(false)
        }
    },[])

    useEffect(()=> {
        darkMode ? window.localStorage.setItem('darkMode', 'true') :  window.localStorage.setItem('darkMode', 'false')
    },[darkMode])


    const handleClickButton = () => setDarkMode(!darkMode)
    const handleHome = () => history.push('/')
    
    return(   
        <header className={ darkMode ? "Header Header--dark" : "Header"}>
                        <div className="Header_icon" onClick={ handleHome } >
                            <IconLogo/>
                        </div>
                        <nav className='Nav'>
                            <ul className='Nav_wrapper'>
                                
                                <li>
                                    <Link to="/" >Inicio</Link>
                                </li>           
                                <li>
                                    <Link to="/projects">Proyectos</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contacto</Link>
                                </li>
                                <li>
                                    <Switch onClick={ handleClickButton } />
                                </li> 
                            </ul>
                        </nav>
                    </header>
    )
}

export default Header