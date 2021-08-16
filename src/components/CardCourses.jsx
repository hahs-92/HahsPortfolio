//DEPENDECIAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//STYLES
import '../styles/components/CardCourses.scss'


const CardCourses = () => {

    const { darkMode } = useContext(AppContext)

    return(
        <>  
            <article className={ darkMode ? "CardCourses CardCourses--dark" : "CardCourses"}>
                <h2>Education</h2>
                
                <h3>Web Development JavaScript </h3>
                <h3 className="CardCourses_fontweight">Platzi</h3><br/>
                <h3>Web Development  </h3>
                <h3 className="CardCourses_fontweight">Ministerio TIC - MisionTic2022</h3><br/>
                <h3>Business Administration</h3>
                <h3 className="CardCourses_fontweight">Universidad Publica y tecnólogica de Colombia</h3>
            </article>
        </>
    )
}

export default CardCourses