//STYLES
import '../styles/components/BarSkill.scss'

const BarSkill = ({ Logo, width, title }) => {
    
    return(
        <div className='BarSkill' title={ title }>
            <div className='BarSkill_icon'>
                { Logo }
            </div>

            <div className='BarSkill_wrapper'>
                <div className='BarSkill_wrapper-into' style={ { width: `${ width }` } }>

                </div>
            </div>
        </div>
    )
}

export default BarSkill