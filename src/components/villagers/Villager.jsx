import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Villager.css';

const Villager = ({ image, name }) => (
    <figure data-testid="villager"
        className={StyleSheet.Villager}>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
    </figure>
)

Villager.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Villager;
