//DEPENDECIAAS
import { useContext } from 'react'
//CONTEXT
import AppContext from '../context/AppContext'
//STYLES
import '../styles/components/Item.scss'

const Item = ({ shape, element }) => {
    const { darkMode } = useContext(AppContext)
    return (
        <>
            {
                darkMode 
                    ?   <div className={ `${ shape } --${ element } --dark`}></div>
                    :   <div className={ `${ shape } --${ element }`}></div>
            }
        </>
      
    )
}

export default Item 