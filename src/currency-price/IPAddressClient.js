import CryptoError from "../error-message/CryptoError";
import axios from "axios";

const getIPAddress = async () => {
    try {
        const response = await axios.get(`https://geolocation-db.com/json/`);
        const { data } = response;
        return data?.IPv4;
    } catch (err) {
        if (err?.response) {
            throw new CryptoError('There was an error occurred while resolving the IP address of user', err?.response?.data);
        }
        throw err;
    }
};

export { getIPAddress };
