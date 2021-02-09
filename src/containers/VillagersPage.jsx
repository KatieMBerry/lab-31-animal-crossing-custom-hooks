import React, { useState, useEffect } from 'react';

const VillagerPage = () => {
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

export default VillagerPage;
