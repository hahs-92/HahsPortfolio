//COMPONENTS
import CardProyects from './CardProyects'

//STYLES
import '../styles/components/ListProyects.scss'

// ___________________________________________________________________

const ListProyects= () => {
    return (
        <section className='ListProyects-wrapper'>
            <h2>Proyectos</h2>
            {
                [ 1,2,3,4,5,6 ].map((item) => (
                    <CardProyects key={ item } />
                    // console.log(item)
                ))
            }
        </section>
        
    )
}

export default ListProyects