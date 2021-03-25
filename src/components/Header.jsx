//DEPENDENCIAS
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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

    const { darkMode, setDarkMode } = useContext(AppContext)
    const { isHome, setIsHome } = useContext(AppContext)

    useEffect(() => {
        let local = localStorage.getItem('darkMode','true')
        if(local === 'true'){
            setDarkMode(true)
            console.log("local is " +local )
        }
        else{
            setDarkMode(false)
            console.log('local es '+ local)
        }
    },[])

    useEffect(()=> {
        if(darkMode) {
            window.localStorage.setItem('darkMode', 'true')
            console.log('true')
       }
       else {
            window.localStorage.setItem('darkMode', 'false')
            console.log("falso")
       }
    },[darkMode])


    const handleClick = () => {
        setIsHome(true)
    }

    const handleClickButton = () => {
       setDarkMode(!darkMode)
    }


    return(
        <>   
            {
                darkMode
                    ?
                    <header className="Header Header--dark">
                        <div className="Header_icon" >
                            <IconLogo/>
                        </div>
                        <nav className='Nav'>
                            <ul className='Nav_wrapper'>
                                
                                {
                                    isHome
                                        ? 
                                        <li>
                                            <HashLink to="#proyects">Proyectos</HashLink>
                                        </li>
                                        :
                                        <li>
                                            <Link to="/" onClick={ handleClick }>Inicio</Link>
                                        </li>           
                                }

                                <li>
                                    <HashLink to="#contact">Contacto</HashLink>
                                </li>

                                <li>
                                    {/* <button onClick={ handleClickButton }>Dark</button> */}
                                    <Switch onClick={ handleClickButton } />
                                </li> 
                            </ul>
                        </nav>
                    </header>
                    
                    :
                    <header className= "Header"  >
                        <div className="Header_icon" >
                            <IconLogo/>
                        </div>
                        <nav className='Nav'>
                            <ul className='Nav_wrapper'>
                                
                                {
                                    isHome
                                        ? 
                                        <li>
                                            <HashLink to="#proyects">Proyectos</HashLink>
                                        </li>
                                        :
                                        <li>
                                            <Link to="/" onClick={ handleClick }>Inicio</Link>
                                        </li>           
                                }
        
                                <li>
                                    <HashLink to="#contact">Contacto</HashLink>
                                </li>
        
                                <li>
                                    {/* <button onClick={ handleClickButton }>Dark</button> */}
                                    <Switch onClick={ handleClickButton } />
                                </li> 
                            </ul>
                        </nav>
                    </header>
            }

        </>

    )
}

export default Header