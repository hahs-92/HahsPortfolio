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
                    :
                    <article className='CardHobbies'>
                        <h2>Intereses</h2>
                        <div className='CardHobbies_wrapper'>
                        <div title='Futbol'>
                                <IconSoccer />
                            </div>
                            <div title='Musica'>
                                <IconMusic />
                            </div>
                            <div title='VideoJuegos'>
                                <IconGame />
                            </div>
                            <div title='Leer'>
                                <IconBook />
                            </div>
                        </div>
                    </article>
            }
            
        </>
    )
}

export default CardSoftware