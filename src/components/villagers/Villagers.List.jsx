import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VillagerList = ({ villagers }) => {
    const villagerElements = villagers.map(villager => (
        <li key={villager._id}>
            <Link to={`/villagers/${villager._id}`} >
                <Villager
                    image={villager.image}
                    name={villager.name} />
            </Link>
        </li >
    ));

    return <ul data-testid="villagers">
        {villagerElements}
    </ul>
}

VillagerList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default VillagerList;
