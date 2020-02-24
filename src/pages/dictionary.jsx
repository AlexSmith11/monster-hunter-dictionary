import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { useRouteMatch, useParams, Route, Link, Switch } from 'react-router-dom';


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
                    <Link to={`${match.url}/Ailments`}>Ailments</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Armor`}>Armor</Link>
                </li>

                <li>
                    <Link to={`${match.url}/ArmorSets`}>Armor Sets</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Charms`}>Charms</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Decorations`}>Decorations</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Events`}>Events</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Items`}>Items</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Locations`}>Locations</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Monsters`}>Monsters</Link>
                </li>

                <li>
                    <Link to={`${match.url}/MotionValues`}>Motion Values</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Skills`}>Skills</Link>
                </li>

                <li>
                    <Link to={`${match.url}/Weapons`}>Weapons</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/** Add more routes here (to the specific topics)
             * The first route is what i displayed on the page before a topic is chosen.
             * The routes after that display any chosen topics. */}
            <Switch>
                <Route exact path={match.path}>
                    <h4>Please select a topic :)</h4>
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

/**
 * The route that renders this component has a path of 'topics/:topicId'.
 * The ':topidId' part of the URL is a placeholder that we can get from 'useParams()'.
 */
const Topic = () => {
    let { topicId } = useParams();
    return (
        <h3> requested topic ID: {topicId}</h3>
    )
}

export default Dictionary;