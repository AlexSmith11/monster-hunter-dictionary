import { Navbar, Nav } from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom';


/**
 * Main page for all topics
 */
const Dictionary = () => {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Dictionary</h2>
            <ul>
                <link to={`${match.url}/weapons`}>weapons</link>
            </ul>
        </div>
    );
}

export default Dictionary;