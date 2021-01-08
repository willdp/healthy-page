import React from 'react'
import './header.css'

const menuItems = ['HEALTHY RECIPES', 'BLOG', 'JOIN'];

const heightPage = document.body.scrollHeight

export default function generateHeader() {

    var scroll;
    
    return (
        <div className="header-container">
            <h1 className="header-title" onClick={() => window.scrollTo(0, 0)}>Healthy Food</h1>
            <div className="menu">
                {
                menuItems.map((item) => {
                    return <span className="item-menu" onClick={() => {

                      scroll = item === 'HEALTHY RECIPES' ? 750 : item === 'BLOG' ? 2150 : 3000;

                        window.scrollTo(0, scroll);}}>{item}</span>
                })}
                <button className="btn" onClick={() => window.scrollTo(0, 5000)}>REGISTER</button>
            </div>
        </div>
    )
}

