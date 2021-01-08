import React from 'react'
import services from '../../../assets/imgs/bloco_services.svg'
import './know-more.css'

export default function generateKnowMore() {

    const knowMoreText = [
    ' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',

    'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',

    'A small river named Duden flows by their place and supplies it with the necessary regelialia.'

    ];

    return(
        <div className="service-container">
            <img src={services} alt={services}/>
            <div className="service-text">
                <h2> The Best services ready To serve you</h2>
                <p>{knowMoreText.map(
                    (text) => {
                        return (
                            <p>{text}</p>
                        )
                    }
                )}</p>
                <button className="btn">Know more</button>
            </div>
        </div>
    )
}