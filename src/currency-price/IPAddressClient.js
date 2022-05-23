import CryptoError from "../error-message/CryptoError";
import axios from "axios";

const getIPAddress = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_IP_ADDRESS_RESOLVER}`);
        const { data } = response;
        return data?.IPv4;
    } catch (err) {
        if (err?.response) {
            throw new CryptoError('There was an error occurred while resolving the IP address of user', err?.response?.data?.error);
        }
        throw err;
    }
};

export { getIPAddress };
