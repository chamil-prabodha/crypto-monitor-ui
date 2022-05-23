import axios from "axios";
import CryptoError from "../error-message/CryptoError";

const getPrice = async (id, ip) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/${process.env.REACT_APP_PRICE_PATH}/${id}?ip=${ip}`);
        const { data } = response;
        return data?.data;
    } catch (err) {
        if (err?.response) {
            console.log(err?.response?.data);
            throw new CryptoError('There was an error occurred while getting the price of currency', err?.response?.data?.error);
        }
        throw err;
    }
};

export { getPrice };
