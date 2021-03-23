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
    return (
        <article className='CardSkills'>
            <h2>Habilidades</h2>
            <BarSkill  Logo={ <IconHtml/> } width='90%'  title="Html"/>
            <BarSkill  Logo={ <IconCss/> } width='85%'  title="Css"/>
            <BarSkill  Logo={ <IconJs/> } width='80%'  title="JavaScript"/>
            <BarSkill Logo={ <IconSass /> } width='75%'  title="Sass" />
            <BarSkill  Logo={ <IconReact/> } width='70%'  title="React"/>
            <BarSkill Logo={ <IconWebpack/> } width='70%'  title="Webpack"/>
        </article>
    )
}

export default CardSkills