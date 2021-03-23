//COMPONNETS
import BarSoftSkill from './BarSoftSkill'

//STYLES
import '../styles/components/CardLanguages.scss'


const CardLanguages = () => {
    return (
        <article className='CardLanguages'>
            <h2>Idiomas</h2>
            <BarSoftSkill  title="Español" count="5" shape="Circle"/>
            <BarSoftSkill  title="Ingles" count="3" shape="Circle"/>
        </article>
    )
}

export default CardLanguages