//DEPENDECIAAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//COMPONNETS
import BarSkill from './BarSkill'

//ASSESTS
import IconHtml from './IconHtml'
import IconCss from './IconCss'
import IconJs from './IconJs'
import IconSass from './IconSass'
import IconReact from './IconReact'
import IconWebpack from './IconWebpack'

//STYLES
import '../styles/components/CardSkills.scss'


const CardSkills  = () => {

    const { darkMode } = useContext(AppContext)

    return (
        <>
            {
                darkMode
                    ?
                    <article className='CardSkills CardSkills--dark'>
                        <h2>Habilidades</h2>
                        <BarSkill  Logo={ <IconHtml fill='#64C4D7'/> } width='90%'  title="Html"/>
                        <BarSkill  Logo={ <IconCss fill='#64C4D7'/> } width='85%'  title="Css"/>
                        <BarSkill  Logo={ <IconJs fill='#64C4D7'/> } width='80%'  title="JavaScript"/>
                        <BarSkill Logo={ <IconSass fill='#64C4D7'/> } width='70%'  title="Sass" />
                        <BarSkill  Logo={ <IconReact fill='#64C4D7'/> } width='75%'  title="React"/>
                        <BarSkill Logo={ <IconWebpack fill='#64C4D7'/> } width='70%'  title="Webpack"/>
                    </article>
                    :
                    <article className='CardSkills'>
                        <h2>Habilidades</h2>
                        <BarSkill  Logo={ <IconHtml/> } width='90%'  title="Html"/>
                        <BarSkill  Logo={ <IconCss/> } width='85%'  title="Css"/>
                        <BarSkill  Logo={ <IconJs/> } width='80%'  title="JavaScript"/>
                        <BarSkill Logo={ <IconSass /> } width='70%'  title="Sass" />
                        <BarSkill  Logo={ <IconReact/> } width='75%'  title="React"/>
                        <BarSkill Logo={ <IconWebpack/> } width='70%'  title="Webpack"/>
                </article>
            }
        </>
    )
}

export default CardSkills