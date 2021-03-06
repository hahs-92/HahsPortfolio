//DEPENDECIAS
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

//CONTEXT
import AppContext from '../context/AppContext'

//PAGES
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import NotFound from '../pages/NotFound'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
//COMPONENTS
import Layout from '../components/Layout'



// ________________________________________________________________________________________

const App = () => {

    const [ darkMode, setDarkMode ] = useState(false)
    const [ isHome , setIsHome ] = useState(true)

    return(
        <BrowserRouter>
            <AppContext.Provider value={ { darkMode, setDarkMode , isHome, setIsHome } }>
                <Layout>
                    <Switch>
                        
                        <Route exact path='/' component={ Home } />
                        <Route exact path='/resume' component= { Resume } />
                        <Route exact path='/projects' component={ Projects } />
                        <Route exact path='/contact' component={ Contact } />
                        <Route component={ NotFound } />
                        
                    </Switch>
                </Layout>
            </AppContext.Provider>
        </BrowserRouter>
    )
}

export default App