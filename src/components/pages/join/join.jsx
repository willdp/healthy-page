import './join.css';
import React from 'react';
import joinImage from '../../../assets/imgs/bloco_final_image.svg'

export default class join extends React.Component {

    getEmail() {
        const email = document.querySelector('.join-input').value;
        localStorage.setItem('userEmail', JSON.stringify(email));
        document.querySelector('.join-input').value = ''
    };

    render() {
        return (
            <div className="join-container">
                <div className="join-content">
                    <h1>Join our membership to get special offer</h1>
                    <div className="join-action">
                        <input type="text" className="form-control" className="join-input" placeholder="Enter your email address"/>
                        <button className="btn" onClick={this.getEmail}>Join</button>
                    </div>
                </div>
                <img className="main-page-img" src={joinImage} alt = {joinImage}/>
            </div>
        )
    }
}