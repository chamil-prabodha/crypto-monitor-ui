import axios from "axios";
import CryptoError from "../error-message/CryptoError";

const getCurrencyList = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/${process.env.REACT_APP_CURRENCY_LIST_PATH}`);
        const { data } = response;
        return data?.data;
    } catch (err) {
        if (err?.response) {
            throw new CryptoError('There was an error occurred while getting the currency list', err?.response?.data?.error);
        }
        throw err;
    }
};

export { getCurrencyList };