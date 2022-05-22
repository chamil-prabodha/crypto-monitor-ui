import { useState, useEffect } from "react";
import { getCurrencyList  } from "./CurrencyListClient";

const useCurrencyListApi = (onLoading) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [err, setError] = useState(null);

    const api = async () => {
        try {
            onLoading(true);
            const list = await getCurrencyList();
            setData(list);
        } catch(err) {
            console.log(err);
            setError(err);
        } finally {
            onLoading(false);
        }
    };

    useEffect(() => {
        api();
    }, []);

    return { loading, data, err };
}

export default useCurrencyListApi;
