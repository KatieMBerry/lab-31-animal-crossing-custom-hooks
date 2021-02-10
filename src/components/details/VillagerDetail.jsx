import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const VillagerDetail = ({ image, name, quote, skill }) => (
    <figure>
        <img src={image} alt={name} />
        <figcaption>
            <p>{name}</p>
            <p>Quote: {quote}</p>
            <p>Skill: {skill}</p>
        </figcaption>
    </figure>
);

VillagerDetail.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired
}

export default VillagerDetail;
