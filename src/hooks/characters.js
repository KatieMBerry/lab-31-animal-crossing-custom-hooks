import { useState, useEffect } from 'react';
import { getVillagerById, getVillagers, getVillagersById } from '../services/getVillagers';

export const useVillagers = () => {
    [loading, setLoading] = useState(false);
    const [villagers, setVillagers] = useState([]);

    useEffect(() => {
        getVillagers()
            .then(villagers => {
                setVillagers(villagers);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        villagers
    }
};

export const useVillagerById = _id => {
    [loading, setLoading] = useState(false);
    const [villager, setVillager] = useState([]);

    useEffect(() => {
        getVillagerById(_id)
            .then(villager => {
                setVillager(villager);
                setLoading(false);
            });
    }, [_id]);

    return {
        loading,
        villager
    }
}

