//DEPENDECIAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//COMPONENTS
import BarSoftSkill from './BarSoftSkill'

//STYLES
import '../styles/components/CardSoftSkills.scss'

const CardSoftSkills = () => {

    const { darkMode } = useContext(AppContext)

    return (
        <article className={ darkMode ? 'CardSoftSkills CardSkills--dark' : 'CardSoftSkills'}>   
                <h2>Habilidades Blandas</h2>
                <BarSoftSkill  title="Responsabilidad" count="5" shape="Square"/>
                <BarSoftSkill  title="Trabajo en equipo" count="4" shape="Square"/>
                <BarSoftSkill  title="Creatividad" count="4" shape="Square"/>
                <BarSoftSkill  title="Adaptabilidad" count="4" shape="Square"/>
                <BarSoftSkill  title="Liderazgo" count="4" shape="Square"/>
        </article>
    )
}

export default CardSoftSkills