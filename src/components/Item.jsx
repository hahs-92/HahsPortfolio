//STYLES
import '../styles/components/Item.scss'

const Item = ({ shape, element }) => {
    return (
        <div className={ `${ shape } --${ element }`}></div>
    )
}

export default Item 