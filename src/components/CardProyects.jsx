//DEPENDECIAS
import { useContext, useRef } from 'react'
//CONTEXT
import AppContext from '../context/AppContext'
//HOOKS
import { useIntersectionObserver } from '../hooks/useIntersectionBoserver'
//STYLES
import '../styles/components/CardProyect.scss'
//COMPONENTS
import Button from  './Anchor'
import Tag from './Tag'

// ________________________________________________________________________

const CardProyects = ({ title, description, src, url, tags, urlCode }) => {

    const { darkMode } = useContext(AppContext)
    const element = useRef(null)
    const { show } = useIntersectionObserver(element)

    return (
            <article className={ darkMode ? 'CardProyect CardProyect--dark' : 'CardProyect'} ref= { element } >
                {
                    show &&
                        <>
                            <section className='CardProyect_img'>
                                <img src={ src } alt={ title } />
                            </section>
            
                            <section className='CardProyect_title'>
                                <h3>{ title }</h3>
                            </section>

                            <section className='CardProyect_tags'>
                                {
                                    tags.map(item => (
                                        <Tag key={ item } title={ item }/>
                                    ))
                                }

                            </section>

                            <section className='CardProyect_description'>
                                <p>{ description }</p>
                            </section>

                            <section className='CardProyect_button'>
                                <Button  title= 'Code' url={ urlCode } theme={ true }/>
                                <Button  title= 'Go there¡' url={ url }/>
                            </section>
                        </>
                }
            </article>
    )
}

export default CardProyects