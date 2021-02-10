import React, { Component, useState, useEffect } from 'react';
// import Header from '../components/headers/Header'
import VillagerList from '../components/villagers/VillagersList';
import { getVillagers } from '../services/getVillagers';


const VillagersPage = () => {
    const [loading, setLoading] = useState(false);
    const [villagers, setVillagers] = useState([]);

    useEffect(() => {
        getVillagers()
            .then(villagers => {
                setVillagers(villagers);
                setLoading(false);
            });
    }, []);

    if (loading) return <h1>Loading</h1>;
    return <VillagerList
        villagers={villagers} />
}

export default VillagersPage;
