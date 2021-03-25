//DEPENDECIAS
import { useContext } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//STYLES
import '../styles/components/CardProyect.scss'

//COMPONENTS
import Button from  './Button'

// ________________________________________________________________________


const CardProyects = ({ title, description, src, url }) => {

    const { darkMode } = useContext(AppContext)

    return (
        <>
            {
                darkMode
                    ?
                    <article className='CardProyect CardProyect--dark' >
                        <div className='CardProyect_img'>
                            <img src={ src } alt={ title } loading='lazy'/>
                        </div>
        
                        <section className='CardProyect_text'>
                            <h3>{ title }</h3>
                            <p>{ description }</p>
                        </section>
        
                        {/* <div className='CardProyect_Icons'>
                            <i></i>
                        </div> */}
        
                        <Button  title= 'Ver proyecto' url={ url }/>
                    </article>
                    :
                    <article className='CardProyect'>
                        <div className='CardProyect_img'>
                            <img src={ src } alt={ title } loading='lazy'/>
                        </div>
        
                        <section className='CardProyect_text'>
                            <h3>{ title }</h3>
                            <p>{ description }</p>
                        </section>
        
                        {/* <div className='CardProyect_Icons'>
                            <i></i>
                        </div> */}
        
                        <Button  title= 'Ver proyecto' url={ url }/>
                    </article>
            }
           
        </>

    )
}

export default CardProyects