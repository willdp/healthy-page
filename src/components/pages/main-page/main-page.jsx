import React from 'react'
import Illustration from '../../../assets/imgs/Illustration.svg'
import search from '../../../assets/imgs/search.svg'
import './main-page.css'

export default function generateMainPage() {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <div className="main-page-container">
            <div className="main-page-content">
                <p className="main-page-text">
                    Ready for
                    Trying a new
                    recipe?
                </p>
                <div className="searcher">
                    <input type="text" className="form-control" placeholder="Search healthy recipes"/>
                    <button className="btn">
                        <img src={search} alt= {search}></img>
                    </button>
                </div>
            </div>
            <img className="main-page-img" src={Illustration} alt = {Illustration}/>
        </div>
    )
}