import React, { useState } from 'react'

export const useApi = (API) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(API);
            if (response.status === 200) {
                const datResp = await response.json();
                setData(datResp.included)
                return datResp;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error al hacer la solicitud:', error);
            return [];
        } finally {
            setLoading(false)
        }
    };

    return { fetchData, loading, data }
}