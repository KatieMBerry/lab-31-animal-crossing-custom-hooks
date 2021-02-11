import React, { useContext } from 'react';
// import { ThematicContext, ThemeProvider } from '../../state/theme';
import PropTypes from 'prop-types';
import Villager from './Villager';
import { Link } from 'react-router-dom';

const VillagersList = ({ villagers }) => {
    // const {theme} = useToggle();
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

VillagersList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default VillagersList;
