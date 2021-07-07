import {  useContext } from 'react'
//STYLES
import '../styles/components/Button.scss'
//CONTEXT
import AppContext from '../context/AppContext'


const Button = ({ title, url, theme }) => {

    const { darkMode } = useContext(AppContext)
    const themeComplementary = theme ? 'Button--complementary' : ''

    return(
        <button className={ darkMode ? `Button ${ themeComplementary }` : `Button ${ themeComplementary } Button--Dark`} >
            <a href={ url } target='_blank' rel='noopener'>
                { title }
            </a>
        </button>
    )
}

export default Button