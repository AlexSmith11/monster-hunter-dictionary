import React, { useState, Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

import Topics from '../Components/currentTopic'
import TopicContainer from '../Components/topicContainer';

//Main page for all topics. Think of this as an index for all topics.

/**
 * Use state to determine which 'page' or 'topic type' we are viewing.
 * All = all topics are displayed, with their topic title and in example image.
 */
const Dictionary = () => {
    const [activePage, setActiveStage] = useState('all')
    return (
        <div>
            <h2>Dictionary</h2>
            <h3>Here there will be links to all types of topic, such as monsters and weapons.</h3>
            <TopicContainer activePage={this.state.activePage} />

        </div>
    );
}

/**
 * Function to control the state of the page (what topic type if not all is rendered).
 */


export default Dictionary;