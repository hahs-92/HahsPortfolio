import {  useContext } from 'react'
//STYLES
import '../styles/components/Button.scss'
//CONTEXT
import AppContext from '../context/AppContext'


const Button = ({ title, url }) => {

    const { darkMode } = useContext(AppContext)

    return(
        <button className={ darkMode ? 'Button' : `Button Button--Dark`} >
            <a href={ url } target='_blank' rel='noopener'>
                { title }
            </a>
        </button>
    )
}

export default Button