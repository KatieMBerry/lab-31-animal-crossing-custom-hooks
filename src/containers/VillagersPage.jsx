import React from 'react';
import VillagerList from '../components/villagers/VillagersList';
import { useVillagers } from '../state/characters.js';

const VillagersPage = () => {
    const { loading, villagers } = useVillagers();

    if (loading) return <h1>Loading</h1>;
    return <VillagerList
        villagers={villagers} />
}

export default VillagersPage;
