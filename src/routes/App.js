//DEPENDECIAS
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//PAGES
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import NotFound from '../pages/NotFound'

//COMPONENTS
import Layout from '../components/Layout'

//STYLES
import '../styles/Globales.scss'

// ________________________________________________________________________________________

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/resume' component= { Resume } />
                    <Route component={ NotFound } />
                    
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App