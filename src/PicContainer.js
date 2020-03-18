
import React, { useState, useEffect } from "react";
import PicCard from "./PicCard";
import axios from "axios";
import "./PicContainer.css";

export default function PicContainer() {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                // console.log(response)
                setPic(response.data);
            })
            .catch(error => {
                console.log('there was an error:', error);
            });
    }, []);

    return (
        <div className="container">
            <PicCard image={pic.url} title={pic.title} desc={pic.explanation} author={pic.copyright} date={pic.date} />
        </div>
    );
}