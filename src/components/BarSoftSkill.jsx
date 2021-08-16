//COMPONNETS
import Item from './Item'

//STYLES
import '../styles/components/BarSoftSkill.scss'


const BarSoftSkill = ({ title, count, shape }) => {
    return(
        <div className='BarSoftSkill'>   
            <div className='BarSoftSkill_text'>
                <h3>{ title }</h3>
            </div>
            {
                (count == 5  )
                    &&
                    <div className='BarSoftSkill_items'>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape } />
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                    </div>    
            }
            {
                (count == 4 )
                    &&
                    <div className='BarSoftSkill_items'>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                    </div>    
            }
            {
                (count == 3 )
                    &&
                    <div className='BarSoftSkill_items'>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                    </div>    
            }
            {
                (count == 2 )
                    &&
                    <div className='BarSoftSkill_items'>
                        <Item element="" shape= { shape }/>
                        <Item element="" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                    </div>    
            }
            {
                (count == 1 )
                    &&
                    <div className='BarSoftSkill_items'>
                        <Item element="" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                        <Item element="Light" shape= { shape }/>
                    </div>    
            }
        </div>
    )
}

export default BarSoftSkill