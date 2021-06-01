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
        <>
            {
                darkMode
                    ?
                    <article className='CardLanguages CardLanguages--dark'>
                        <h2>Idiomas</h2>
                        <BarSoftSkill  title="Español" count="5" shape="Circle"/>
                        <BarSoftSkill  title="Ingles" count="4" shape="Circle"/>
                    </article>
                    :
                    <article className='CardLanguages'>
                        <h2>Idiomas</h2>
                        <BarSoftSkill  title="Español" count="5" shape="Circle"/>
                        <BarSoftSkill  title="Ingles" count="4" shape="Circle"/>
                    </article>
            }
        </>
    )
}

export default CardLanguages