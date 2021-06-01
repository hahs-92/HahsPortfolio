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
        <>
            {
                darkMode
                    ?
                    <article className='CardSoftwares  CardSoftwares--dark'>
                        <h2>Programas</h2>
                        <div className='CardSoftwares_wrapper'>
                            <div title='Invision'>
                            <IconInvision fill='#64C4D7'/>
                            </div>
                            <div title='Figma'>
                            <IconFigma fill='#64C4D7'/>
                            </div>
                            <div title='Git'>
                                <IconGit fill='#64C4D7'/>
                            </div>
                            <div title='Unity'>
                                <IconUnity fill='#64C4D7'/>
                            </div>
                        </div>
                    </article>
                    :
                    <article className='CardSoftwares'>
                        <h2>Programas</h2>
                        <div className='CardSoftwares_wrapper'>
                        <div title='Invision'>
                            <IconInvision />
                            </div>
                            <div title='Figma'>
                            <IconFigma />
                            </div>
                            <div title='Git'>
                                <IconGit />
                            </div>
                            <div title='Unity'>
                                <IconUnity />
                            </div>
                        </div>
                    </article>
            }
        </>
    )
}

export default CardSoftware