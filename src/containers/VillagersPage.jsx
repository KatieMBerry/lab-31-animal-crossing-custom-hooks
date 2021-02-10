import React, { Component, useState, useEffect } from 'react';
// import Header from '../components/headers/Header'
import VillagerList from '../components/villagers/VillagersList';
import { useVillagers } from '../hooks/characters';

const VillagersPage = () => {
    const { loading, villagers } = useVillagers();

    if (loading) return <h1>Loading</h1>;
    return <VillagerList
        villagers={villagers} />
}

export default VillagersPage;
