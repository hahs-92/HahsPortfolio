import {  useContext } from 'react'
//STYLES
import '../styles/components/Anchor.scss'
//CONTEXT
import AppContext from '../context/AppContext'


const Button = ({ title, url, theme }) => {

    const { darkMode } = useContext(AppContext)
    const themeComplementary = theme ? 'Anchor--complementary' : ''    

    return(
        <a     
            className={ darkMode ? `Anchor ${ themeComplementary }` : `Anchor ${ themeComplementary } Anchor--Dark`}
            href={ url } target='_blank' rel='noopener'
        >
            { title }
        </a> 
    )
}

export default Button