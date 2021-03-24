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
        <>
            {
                darkMode
                    ?
                    <article className='CardHobbies CardHobbies--dark'>
                        <h2>Intereses</h2>
                        <div className='CardHobbies_wrapper'>
                            <IconSoccer />
                            <IconMusic />
                            <IconGame />
                            <IconBook />
                        </div>
                    </article>
                    :
                    <article className='CardHobbies'>
                        <h2>Intereses</h2>
                        <div className='CardHobbies_wrapper'>
                            <IconSoccer />
                            <IconMusic />
                            <IconGame />
                            <IconBook />
                        </div>
                    </article>
            }
            
        </>
    )
}

export default CardSoftware