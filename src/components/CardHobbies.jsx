//COMPONNETS
import IconSoccer from './IconSoccer'
import IconMusic from './IconMusic'
import IconGame from './IconGame'
import IconBook from './IconBook'

//STYLES
import '../styles/components/CardHobbies.scss'

// -_________________________________________________________________________________

const CardSoftware = () => {
    return(
        <article className='CardHobbies'>
            <h2>Intereses</h2>
            <div className='CardHobbies_wrapper'>
                <IconSoccer />
                <IconMusic />
                <IconGame />
                <IconBook />
            </div>

        </article>
    )
}

export default CardSoftware