import React, { Component } from 'react';
import {Switch, Route, Link, matchPath} from 'react-router-dom';
import Topic from './topic';

import AllData from '../weapons.json';

class TopicContainer extends Component {
    render() {
        return (

            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {AllData.slice(0, 9).map((topic) => {
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