import React from 'react';
import Button from "react-bootstrap/Button";

const HomeButton: React.FC = () => (
    <Button href="/home" className="home-button" variant="outline-secondary">Home</Button>
);

export default HomeButton;