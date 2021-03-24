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
        <>
            { 
                darkMode
                    ?
                    <article className='CardSoftSkills CardSkills--dark'>   
                            <h2>Habilidades Blandas</h2>
                            <BarSoftSkill  title="Responsabilidad" count="5" shape="Square"/>
                            <BarSoftSkill  title="Trabajo en equipo" count="4" shape="Square"/>
                            <BarSoftSkill  title="Creatividad" count="4" shape="Square"/>
                            <BarSoftSkill  title="Adaptabilidad" count="4" shape="Square"/>
                            <BarSoftSkill  title="Liderazgo" count="4" shape="Square"/>
                    </article>
                    :
                    <article className='CardSoftSkills'>   
                        <h2>Habilidades Blandas</h2>
                        <BarSoftSkill  title="Responsabilidad" count="5" shape="Square"/>
                        <BarSoftSkill  title="Trabajo en equipo" count="4" shape="Square"/>
                        <BarSoftSkill  title="Creatividad" count="4" shape="Square"/>
                        <BarSoftSkill  title="Adaptabilidad" count="4" shape="Square"/>
                        <BarSoftSkill  title="Liderazgo" count="4" shape="Square"/>
                    </article>  
            }
        </>
    )
}

export default CardSoftSkills