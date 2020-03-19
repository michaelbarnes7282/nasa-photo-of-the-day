import React, { useState } from "react";
import { Card, CardHeader, Col, CardText, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const PicCard = props => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);



    if (!props.image) return <h3>Loading...</h3>;


    return (
        <Col>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Info
        </DropdownToggle>
                <DropdownMenu>
                    <Card>
                        <CardHeader><h1>{props.title}</h1></CardHeader>
                        <h3>Author: {props.author}</h3>
                        <CardText>Date: {props.date}</CardText>
                        <CardText>{props.desc}</CardText>
                    </Card>
                </DropdownMenu>
            </Dropdown>
            
            <img className="space-image" alt="Space Pic of the Day" src={props.image} />
        </Col>
    );
}

export default PicCard;