import React from "react";

const PicCard = props => {
    if (!props.image) return <h3>Loading...</h3>;
    
    return (
        <div className="pic-card">
            <img className="space-image" alt="Space Pic of the Day" src={props.image} />
            <h2>{props.title}</h2>
            <h3>Author: {props.author}</h3>
            <p>Shot on: {props.date}</p>
            <p>{props.desc}</p>
        </div>
    );
}

export default PicCard;