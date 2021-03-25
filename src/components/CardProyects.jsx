//DEPENDECIAS
import { useContext, useRef } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//HOOKS
import { useIntersectionObserver } from '../hooks/useIntersectionBoserver'

//STYLES
import '../styles/components/CardProyect.scss'

//COMPONENTS
import Button from  './Button'

// ________________________________________________________________________


const CardProyects = ({ title, description, src, url }) => {

    const { darkMode } = useContext(AppContext)
    const element = useRef(null)
    const { show } = useIntersectionObserver(element)

    return (
        <>
            {
                darkMode
                    ?
                    <article className='CardProyect CardProyect--dark' ref= { element } >
                        {
                            show &&
                                <>
                                    <div className='CardProyect_img'>
                                        <img src={ src } alt={ title } />
                                    </div>
                    
                                    <section className='CardProyect_text'>
                                        <h3>{ title }</h3>
                                        <p>{ description }</p>
                                    </section>
                                    <Button  title= 'Ver proyecto' url={ url }/>
                                </>
                        }
                    </article>
                    :
                    <article className='CardProyect' ref= { element }>
                        {
                            show &&
                                <>
                                    <div className='CardProyect_img'>
                                        <img src={ src } alt={ title } />
                                    </div>
                    
                                    <section className='CardProyect_text'>
                                        <h3>{ title }</h3>
                                        <p>{ description }</p>
                                    </section>
                    
                                    <Button  title= 'Ver proyecto' url={ url }/>
                                </>
                        }
                    </article>
            }
           
        </>

    )
}

export default CardProyects