import React from 'react';
import './HomeCard.css';

const HomeCard = (props) => {
    return (
        <div className="home-card">
            <div className="image-container">
                <img
                    src={props.imageUrl}
                    alt="Preview"
                    className="image"
                />
            </div>
            <div className="content">
                <h3 className="title">{props.title}</h3>
                <p className="description">
                    {props.description}
                </p>
                <button className="view-button">
                    <a href={props.pdfUrl} className='view-button-url'>
                        View
                    </a>
                </button>
            </div>
        </div>
    );
};

export default HomeCard;
