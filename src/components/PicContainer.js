
import React, { useState, useEffect } from "react";
import PicCard from "./PicCard";
import axios from "axios";
import{ Container } from "reactstrap";

export default function PicContainer() {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=Vx3FrLqIAnrEYDFd5BU7aeEhl28UeuSlASbcNcfb`)
            .then(response => {
                // console.log(response)
                setPic(response.data);
            })
            .catch(error => {
                console.log('there was an error:', error);
            });
    }, []);

    return (
        <Container>
            <PicCard image={pic.url} title={pic.title} desc={pic.explanation} author={pic.copyright} date={pic.date} />
        </Container>
    );
}