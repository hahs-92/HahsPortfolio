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
                    <IconSoccer fill='#64C4D7'/>
                </div>
                <div title='Musica'>
                    <IconMusic fill='#64C4D7'/>
                </div>
                <div title='VideoJuegos'>
                    <IconGame fill='#64C4D7'/>
                </div>
                <div title='Leer'>
                    <IconBook fill='#64C4D7'/>
                </div>
            </div>
        </article>
        
    )
}

export default CardSoftware