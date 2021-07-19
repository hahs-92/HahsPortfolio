//DEPENDECIAS
import { useContext } from 'react'
//COMPONENTS
import Header from './Header'
//CONTEXT
import AppContext from '../context/AppContext'
//STYLES
import '../styles/globales.scss'
import '../styles/components/Layout.scss'

// _________________________________________________________________


const Layout = ( { children } ) => {

    const { darkMode } = useContext(AppContext)
    
    return(
        <section className={ darkMode ? "Main Main--Dark" : "Main Main--Light" }>
            <Header/>
            { children }
        </section>       
    )
}

export default Layout