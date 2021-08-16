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
        <article className={ darkMode ? 'CardSoftSkills CardSoftSkills--dark' : 'CardSoftSkills'}>   
                <h2>Soft Skills</h2>
                <BarSoftSkill  title="Responsability" count="5" shape="Square"/>
                <BarSoftSkill  title="Teamwork" count="4" shape="Square"/>
                <BarSoftSkill  title="Creativity" count="4" shape="Square"/>
                <BarSoftSkill  title="Adaptability" count="4" shape="Square"/>
                <BarSoftSkill  title="Leadership" count="4" shape="Square"/>
        </article>
    )
}

export default CardSoftSkills