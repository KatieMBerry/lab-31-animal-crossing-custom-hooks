import { useState, useEffect } from 'react';
import { getVillagerById, getVillagers } from '../services/getVillagers';

export const useVillagers = () => {
    [loading, setLoading] = useState(true);
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
    [loading, setLoading] = useState(true);
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

