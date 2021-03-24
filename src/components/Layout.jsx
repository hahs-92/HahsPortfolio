//DEPENDECIAS
import { useContext } from 'react'

//COMPONENTS
import Header from './Header'
import Footer from './Footer'

//CONTEXT
import AppContext from '../context/AppContext'

//STYLES
import '../styles/globales.scss'
import '../styles/components/Layout.scss'

// _________________________________________________________________


const Layout = ( { children } ) => {

    const { darkMode } = useContext(AppContext)
    
    return(

        <>
            {
                darkMode
                    ?
                    <section className="Main Main--Dark">
                        <Header/>
                        { children }
                        <Footer/>
                    </section>
                    :
                    <section className="Main Main--Light">
                        <Header/>
                        { children }
                        <Footer/>
                    </section>    
            }

        </>        
    )
}

export default Layout