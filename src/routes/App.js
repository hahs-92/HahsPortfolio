//DEPENDECIAS
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//PAGES
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import NotFound from '../pages/NotFound'

// ________________________________________________________________________________________

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/resume' component= { Resume } />
                <Route component={ NotFound } />
            </Switch>
        </BrowserRouter>
    )
}

export default App