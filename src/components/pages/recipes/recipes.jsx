import React from 'react';
import CardsComponent from './recipe-card'
import './recipes.css'

export default function generateRecipes() {

    return (
        <div className="recipes-container">
            <div className="text-content">
                <h1>Our Best Recipes</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
            </div>
            <CardsComponent></CardsComponent>
        </div>
    )
}