import { useState, useEffect, useContext } from "react";
import { getCurrencyList  } from "./CurrencyListClient";
import CryptoContext from "../currency-monitor/CryptoContext";

const useCurrencyListApi = () => {
    const { setLoading, setError } = useContext(CryptoContext);
    const [data, setData] = useState([]);

    const getList = async () => {
        try {
            setLoading(true);
            const list = await getCurrencyList();
            setData(list);
        } catch(err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getList();
    }, []);

    return {data};
}

export default useCurrencyListApi;
