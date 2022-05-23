import axios from "axios";
import CryptoError from "../error-message/CryptoError";

const getPrice = async (id, ip) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/price/${id}?ip=${ip}`);
        const { data } = response;
        return data?.data;
    } catch (err) {
        if (err?.response) {
            throw new CryptoError('There was an error occurred while getting the price of currency', err?.response?.data);
        }
        throw err;
    }
};

export { getPrice };
