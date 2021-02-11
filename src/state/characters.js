import { useState, useEffect } from 'react';
import { getVillagerById, getVillagers } from '../services/getVillagers';
import { useToggle } from './theme';

export const useVillagers = () => {
    const [loading, setLoading] = useState(true);
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
    const [loading, setLoading] = useState(true);
    const [villager, setVillager] = useState([]);
    // const toggleOn = useToggle();

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

