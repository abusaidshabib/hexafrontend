import React from 'react';
import { Link } from 'react-router';

const RefSlider = ({ link, text }) => {
    return (
        <div>
            <Link className="refSlide-btn" to={link}>
                <span>{text ? text : "Shop Now"}</span>
            </Link>
        </div>
    );
};

export default RefSlider;