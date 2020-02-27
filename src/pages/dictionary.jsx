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
    const [activePage] = useState('all')
    return (
        <div>
            <h2>Dictionary</h2>

            <TopicContainer activePage={this.state.activePage} />

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