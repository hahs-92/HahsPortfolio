//DEPENDECIAAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'
//STYLES
import '../styles/components/BarSkill.scss'

const BarSkill = ({ Logo, width, title }) => {
    const { darkMode } = useContext(AppContext)
    
    return(
        <div className='BarSkill' title={ title }>
            <div className='BarSkill_icon'>
                { Logo }
            </div> 

            <div className={ darkMode ? 'BarSkill_wrapper --dark' : 'BarSkill_wrapper'}>
                <div className='BarSkill_wrapper-into' style={ { width: `${ width }` } }>

                </div>
            </div>
        </div>
    )
}

export default BarSkill