
/**
 * Import the navbar plus any pages you want to dsplay on the navbar here
 */
import Navbar from './Components/navbar.js'
import { useRouteMatch } from 'react-router-dom';

/**
 * Introduce any pathing here. 
 * The 'Dictionary' path contains all lists (topics).
 * The 'Topic' path is any specific list such as all monsters, or all weapons.
 */
export default function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Redirect exact from="/" to="Main"></Redirect>
                    <Route path="Main"><Main/></Route>
                    <Route path="Dictionary"><Dictionary/></Route>
                    <Route path="About"><About/></Route>
                </Switch>
            </Router>
        </div>
    );
}
