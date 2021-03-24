//STYLES
import '../styles/components/Button.scss'


const Button = ({ title, url }) => {
    return(
        <button className='Button'>
            <a href={ url } target='_blank'>
                { title }
            </a>
        </button>
    )
}

export default Button