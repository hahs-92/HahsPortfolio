//COMPONNETS
import IconInvision from './IconInvision'
import IconFigma from './IconFigma'
import IconGit from './IconGit'
import IconUnity from './IconUnity'

//STYLES
import '../styles/components/CardSoftwares.scss'

// -_________________________________________________________________________________

const CardSoftware = () => {
    return(
        <article className='CardSoftwares'>
            <h2>Programas</h2>
            <div className='CardSoftwares_wrapper'>
                <IconInvision />
                <IconFigma />
                <IconGit />
                <IconUnity />
            </div>

        </article>
    )
}

export default CardSoftware