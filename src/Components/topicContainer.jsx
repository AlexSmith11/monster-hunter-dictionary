import React, { Component } from 'react';
import Topic from './topic';

import WeaponData from '../weapons.json';

/**
 * Here we will pass a parameter (topic) that will determine what is displayed on the cards.
 * Initially we will display one card for each topic.
 * After a param is passed, we will display only things from one topic.
 */

class TopicContainer extends Component {

    componentDidMount

    /**
    * Takes a param (topic) and asks API for the info on this param (topic).
    * Sets the state of the 
    */
    getTopicInformation = (topic) => {
        if (topic == 'all') {
            const data = WeaponData;
            return data;
        }
    }

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {data.slice(0, 9).map((topic) => {
                        return <Topic
                        // pageType={}

                        // image={weapon.assets.image}
                        // category={weapon.type}
                        // rarity={weapon.rarity}
                        // icon={weapon.assets.icon}
                        // title={weapon.name}
                        // dmgType={weapon.damageType}
                        // attack={weapon.attack.display}

                        // description={weapon.description}
                        // duration={weapon.duration}
                        // currency={weapon.currency_symbol}
                        // price={weapon.price}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default TopicContainer