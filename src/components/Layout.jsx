//COMPONENTS
import Header from './Header'
import Footer from './Footer'

//STYLES
// import '../styles/Globales.scss'
import '../styles/components/Layout.scss'

// _________________________________________________________________


const Layout = ( { children } ) => {
    return(
        <section className='Main'>
            <Header/>
            { children }
            <Footer/>
        </section>
    )
}

export default Layout