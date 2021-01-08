import React from 'react';

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import blog_image_1 from '../../../assets/imgs/blog_image_1.svg';
import bloco_image_2 from '../../../assets/imgs/bloco_image_2.svg';
import bloco_image_3 from '../../../assets/imgs/bloco_image_3.svg';
import bloco_image_4 from '../../../assets/imgs/bloco_image_4.svg';
import comida_4 from '../../../assets/imgs/comida_4.svg';
import './blog.css'


export default function generateBlog() {

    const blogCards = [{
        image: blog_image_1,
        description: 'Quick-start guide to nuts and seeds',
        writerIcon: comida_4,
        writerName: 'Kevin Ibrahim'
    }, {
        image: bloco_image_2,
        description: 'Nutrition: Tips for Improving Your Health',
        writerIcon: comida_4,
        writerName: 'Mike Jackson'
    }, {
        image: bloco_image_3,
        description: 'The top 10 benefits of eating healthy',
        writerIcon: comida_4,
        writerName: 'Bryan McGregor'
    }, {
        image: bloco_image_4,
        description: 'The top 10 benefits of eating healthy',
        writerIcon: comida_4,
        writerName: 'Kevin Ibrahim'
    },
    {
        image: blog_image_1,
        description: 'Quick-start guide to nuts and seeds',
        writerIcon: comida_4,
        writerName: 'Kevin Ibrahim' 
    }, 
    {
        image: bloco_image_2,
        description: 'Nutrition: Tips for Improving Your Health',
        writerIcon: comida_4,
        writerName: 'Mike Jackson'
    }, {
        image: bloco_image_3,
        description: 'The top 10 benefits of eating healthy',
        writerIcon: comida_4,
        writerName: 'Bryan McGregor'
    }, {
        image: bloco_image_4,
        description: 'The top 10 benefits of eating healthy',
        writerIcon: comida_4,
        writerName: 'Kevin Ibrahim'
    }
];

    return (
        <div className="blog-container">
            <div className="blog-text">
                <h1>Read Our Blog</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div style={{margin: '0 10%'}}>
            <OwlCarousel
                className="owl-theme"
                nav
                autoWidth
                margin={0} >
                {blogCards.map((card) => {
                    return (
                        <div className="item" style={{width: '350px'}}>
                            <img src={card.image} alt={card.image}/>
                            <div className="card-description">
                                <h4>{card.description}</h4>
                                <div className="writer-container">
                                    <img  className="circle-image" src={comida_4} alt={card.image}/>
                                    <span>{card.writerName}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </OwlCarousel>
            </div>
        </div>
    )
}