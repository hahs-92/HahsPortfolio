//DEPENDECIAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//COMPONNETS
import BarSoftSkill from './BarSoftSkill'

//STYLES
import '../styles/components/CardLanguages.scss'


const CardLanguages = () => {

    const { darkMode } = useContext(AppContext)

    return (
        <article className={ darkMode ? 'CardLanguages CardLanguages--dark' : 'CardLanguages'}>
            <h2>languages</h2>
            <BarSoftSkill  title="Spanish" count="5" shape="Circle"/>
            <BarSoftSkill  title="English" count="4" shape="Circle"/>
            <BarSoftSkill  title="French" count="1" shape="Circle"/>
        </article>
    )
}

export default CardLanguages