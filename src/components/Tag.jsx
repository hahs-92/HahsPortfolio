//ESTILOS
import '../styles/components/Tag.scss'

const Tag = (props) => {
    return (
        <article className={ `Tag Tag__${ props.title }`}>
            <h4>{ props.title }</h4>
        </article>
    )
}

export default Tag