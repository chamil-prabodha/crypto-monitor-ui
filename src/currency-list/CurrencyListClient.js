import axios from "axios";
import CryptoError from "../error-message/CryptoError";

const getCurrencyList = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/currency/list');
        const { data } = response;
        return data?.data;
    } catch (err) {
        if (err?.response) {
            throw new CryptoError('There was an error occurred while getting the currency list', err?.response?.data);
        }
        throw err;
    }
};

export { getCurrencyList };