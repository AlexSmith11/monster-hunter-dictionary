import React, { Component } from 'react';
import "../card.css";
import backgroundColour from "../backgroundColour.json"

// renderSwitchRarity(rarity) {
//     switch (rarity) {
//         case '1':
//             return <h6 className="image-top__text" style={{ color: 'black', backgroundColor: 'yellow' }}>
//                 <span>Rarity: {props.rarity} &nbsp;</span>
//             </h6>
//     }
// }

/**
 * Cards that display a list of things within the topic i.e. a list of all monsters
 * @param {*} props 
 */
const Topic = props => {
    const backgroundColourRarity = { backgroundColor: backgroundColour[0][props.rarity] }

    return (
        <div class="col-md-4 col-xs-6 mt-3">
            <div className="card text-left shadow">
                <div className="card__body text-dark">

                    <div className="image-top">
                        <img src={props.image} alt="Image Header" className='card-img-top' />
                        <div className="card-category">
                            {props.category}
                        </div>
                        <div className="image-top__text">
                            <div style={backgroundColourRarity}>
                                <h6>Rarity: {props.rarity}</h6>
                            </div>
                        </div>
                        <div className="card__logo">
                            <img src={props.icon} class="img-fluid"></img>
                        </div>
                    </div>

                    <h4 className="card__title">{props.title}</h4>
                    <p className="card__dmgType">Damage Type: {props.dmgType}</p>
                    <p className="card__attack">Attack: {props.attack}</p>

                    {/* <p className="card__text text-secondary">{props.description}</p>
                    <p className="card__duration"><span>{props.duration} days from:</span></p>
                    <span className="card__price">{props.currency}{props.price}</span>
                    <span className="card__priceUnit">pp</span> */}

                    <div className="card__bottomRowRight">
                        <a href="#" className="btn btn-lg btn-primary">Show More</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Topic;