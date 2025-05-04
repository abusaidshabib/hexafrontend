import React from 'react';
import { Link } from 'react-router';

const SliderButton = ({ link, text }) => {
    return (
        <Link className="slide-btn" to={link}>
        <span>{text ? text : "Shop Now"}</span>
      </Link>
    );
};

export default SliderButton;