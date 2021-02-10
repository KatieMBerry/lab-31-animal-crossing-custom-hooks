import React from 'react';
import PropTypes from 'prop-types';
import { useVillagerById } from '../hooks/characters.js';
import VillagerDetail from '../components/details/VillagerDetail';

const VillagerById = ({ match }) => {
    const { loading, villager } = useVillagerById(match.params._id);

    if (loading) return <h1>Loading</h1>;
    return <div data-testid="villagerDetail"><VillagerDetail {...villager} /> </div>;
};

VillagerById.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            _id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default VillagerById;
