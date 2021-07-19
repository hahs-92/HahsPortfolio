//DEPENDECIAS
import { useContext } from 'react'
//CONTEXT
import AppContext from '../context/AppContext'
//COMPONNETS
import IconSoccer from './IconSoccer'
import IconMusic from './IconMusic'
import IconGame from './IconGame'
import IconBook from './IconBook'
//STYLES
import '../styles/components/CardHobbies.scss'

// -_________________________________________________________________________________

const CardSoftware = () => {

    const { darkMode } = useContext(AppContext)
    return(
        
        <article className={ darkMode ? 'CardHobbies CardHobbies--dark' : 'CardHobbies'}>
            <h2>Intereses</h2>
            <div className='CardHobbies_wrapper'>
                <div title='Futbol'>
                    { darkMode ? <IconSoccer fill='#64C4D7'/> : <IconSoccer />}
                </div>
                <div title='Musica'>
                    { darkMode ? <IconMusic fill='#64C4D7'/> : <IconMusic />}
                </div>
                <div title='VideoJuegos'>
                    { darkMode ? <IconGame fill='#64C4D7'/> : <IconGame />}
                </div>
                <div title='Leer'>
                    { darkMode ? <IconBook fill='#64C4D7'/> : <IconBook />}
                </div>
            </div>
        </article>
        
    )
}

export default CardSoftware