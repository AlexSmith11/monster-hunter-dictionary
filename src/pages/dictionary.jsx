import React, { useState, Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { useRouteMatch, useParams, Route, Link, Switch, matchPath, withRouter } from 'react-router-dom';

import Topics from '../Components/currentTopic'
import TopicContainer from '../Components/topicContainer';


/**
 * Main page for all topics
 * Think of this as an index for all topics.
 */
const Dictionary = () => {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Dictionary</h2>
            {/** In this first ul tag we have links (a tags with hrefs) to specific pages.
             * Add routes below in the switch statement
             * Unfortunately the API does not go all the way to the top level,
             * so we have to enter the links manually. */}
            <ul>
                <li>
                    <Link to={`${match.url}/ailments`}>Ailments</Link>
                </li>
                <li>
                    <Link to={`${match.url}/armor`}>Armor</Link>
                </li>
                <li>
                    <Link to={`${match.url}/armorSets`}>Armor Sets</Link>
                </li>
                <li>
                    <Link to={`${match.url}/charms`}>Charms</Link>
                </li>
                <li>
                    <Link to={`${match.url}/decorations`}>Decorations</Link>
                </li>
                <li>
                    <Link to={`${match.url}/events`}>Events</Link>
                </li>
                <li>
                    <Link to={`${match.url}/items`}>Items</Link>
                </li>
                <li>
                    <Link to={`${match.url}/locations`}>Locations</Link>
                </li>
                <li>
                    <Link to={`${match.url}/monsters`}>Monsters</Link>
                </li>
                <li>
                    <Link to={`${match.url}/motion-values`}>Motion Values</Link>
                </li>
                <li>
                    <Link to={`${match.url}/skills`}>Skills</Link>
                </li>
                <li>
                    <Link to={`${match.url}/weapons`}>Weapons</Link>
                </li>
            </ul>

            {/** Add more routes here (to the specific topics)
             * The first route is what i displayed on the page before a topic is chosen.
             * The routes after that display any chosen topics. */}
            <Switch>
                <Route exact path={match.path}>
                    <h4>Please select a topic :)</h4>
                </Route>
                <Route
                    path={this.props.location/'ailments'}
                    render={(props) => <TopicContainer {...props} pathName={ailment}/>}
                    >
                </Route>
            </Switch>
        </div>
    );
}



// const getParams = pathName => {
//     const matchTopic = matchPath(pathName, {
//         path: '/topic/:topicId'
//     });
//     return (matchTopic && matchTopic.params) || {};
// }

/**
 * The route that renders this component has a path of 'topics/:topicId'.
 * The ':topidId' part of the URL is a placeholder that we can get from 'useParams()'.
 */
// const Topic = () => {
//     let { topicId } = useParams();
//     return (
//         <h3> requested topic ID: {topicId}</h3>
//     )
// }

export default Dictionary;