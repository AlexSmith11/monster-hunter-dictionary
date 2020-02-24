import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { useRouteMatch, useParams, Route, Link } from 'react-router-dom';


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
             * Add routes below in the switch statement */}
            <ul>
                <li>
                    <Link to={`${match.url}/topics`}>Topics</Link>
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
            <switch>
                <Route exact path={match.path}>
                    <h3>Please select a topic :)</h3>
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
            </switch>
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