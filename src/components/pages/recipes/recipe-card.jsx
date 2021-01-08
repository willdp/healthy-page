import React from 'react';
import comida_1 from '../../../assets/imgs/comida_1.svg'
import comida_2 from '../../../assets/imgs/comida_2.svg'
import comida_3 from '../../../assets/imgs/comida_3.svg'
import comida_4 from '../../../assets/imgs/comida_4.svg'

export default function generateRecipeCard(props) {

    const bestRecipes = [{
        image: comida_1,
        description: 'Broccoli Salad with Bacon'
    }, {
        image: comida_2,
        description: 'Classic Beef Burgers'
    }, {
        image: comida_3,
        description: 'Classic Potato Salad'
    }, {
        image: comida_4,
        description: 'Cherry Cobbler on the Grill'
    }];

    return(
        <div className="cards-container">
        {
            bestRecipes.map((data) => {
                return (
            <div className="recipe-card">
                <img src={data.image} alt={data.image}/>
                <div className="card-content">
                    <h3>{data.description}</h3>
                    <button className="btn">See Recipe</button>
                </div>
            </div>
                )
        })}
        </div>
    )
}