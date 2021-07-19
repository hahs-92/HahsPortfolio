//COMPONENTS
import CardProyects from './CardProyects'
//STYLES
import '../styles/components/ListProyects.scss'
//INFO
import Info from '../info.js'


// ___________________________________________________________________

const ListProyects= () => {


    return (
        <section className='ListProyects-wrapper'>
            <h2>Proyectos</h2>
            {
                Info.map((item) => (
                    <CardProyects 
                        key={ item.id } 
                        title= { item.title } 
                        description={ item.description } 
                        src={ item.src }  
                        url= { item.url }
                        urlCode = { item.urlCode } 
                        tags={ item.tags }
                    />
                ))
            }
        </section> 
    )
}

export default ListProyects