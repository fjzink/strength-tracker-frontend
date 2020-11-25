import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apiClient } from '../config/axios';

interface RootState {
    token: string;
}

const Plans = () => {
    const token = useSelector((state: RootState) => state.token);

    useEffect(() => {
        const fetchData = async () => {
            const res = await apiClient.get('/api/trainingplans', {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });
            console.log(res.data);
        };

        fetchData();
    }, [token]);

    return (
        <div>
            <p>Plans</p>
        </div>
    );
};

export { Plans };
