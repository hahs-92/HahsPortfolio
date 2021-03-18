//COMPONENTS
import CardProyects from './CardProyects'

// ___________________________________________________________________

const ListProyects= () => {
    return (
        <section>
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