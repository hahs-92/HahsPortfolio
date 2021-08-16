//DEPENDECIAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//COMPONNETS
import IconInvision from './IconInvision'
import IconFigma from './IconFigma'
import IconGit from './IconGit'
import IconUnity from './IconUnity'
//STYLES
import '../styles/components/CardSoftwares.scss'

// -_________________________________________________________________________________

const CardSoftware = () => {
    const { darkMode } = useContext(AppContext)

    return(
        <article className={ darkMode ? 'CardSoftwares  CardSoftwares--dark' : 'CardSoftwares' }>
            <h2>Software</h2>
            <div className='CardSoftwares_wrapper'>
                <div title='Invision'>
                    { darkMode ? <IconInvision fill='#64C4D7'/> : <IconInvision />}
                </div>
                <div title='Figma'>
                    { darkMode ?  <IconFigma fill='#64C4D7'/> :  <IconFigma />}
                </div>
                <div title='Git'>
                   { darkMode ?  <IconGit fill='#64C4D7'/> :  <IconGit />}
                </div>
                <div title='Unity'>
                    { darkMode ? <IconUnity fill='#64C4D7'/> : <IconUnity />}
                </div>
            </div>
        </article>
    )
}

export default CardSoftware