import React, { Component } from 'react';
import TopicContainer from './topicContainer';
import { getData } from "../utils/api.js";

/**
 * Get data from local json files. Delete this for production (real-world use).
 * See bottom of page for details.
 * 
 * Depending on the topic, we want to import/fetch a specific json.
 */
import { useParams } from 'react-router-dom';

/**
 * Top level comp for the various topic cards. Could control how many, where, etc.
 * We create a grid using bootstrap rows/columns.
 * We also pass in the props unique to each card by just looping over
 * each object in the json array.
 */


const CurrentTopic = () => {
    let { topic } = useParams
    return (
        <div>This is the {topic} route</div>
    )
}



/**
 * The below is not needed for this test - this is the extra stuff for when we are
 * fetching actual API's.
 * 
 * The only difference between what is implemented and this (the real-world solution)
 * is that we are looping over local data from the json file that we can just import.
 * 
 * If I were fetching data from an actual API, I would use the axios utility I have created 
 * (api.js) and run the data through the code below, then send the data to the card 
 * components.
 */
// state = {
//     cardData: [],
//     loading: true
// }

// /**
//  * Get the info for the cards AFTER initial render
//  */
// componentDidMount() {
//     this.main();
// }
// /**
//  * Get data from the API (the JSON) and do stuff with it
//  */
// async main() {
//     const dataResponse = await getData();
//     const data = dataResponse.data
//     console.log(data)

//     // Once data has been fetched, rerender with it.
//     this.setState({
//         cardData: data,
//         loading: false
//     })
// }


export default CurrentTopic