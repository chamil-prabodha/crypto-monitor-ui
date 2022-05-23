import CryptoError from "../error-message/CryptoError";

const getPrice = async (id, ip) => {
    const response = await fetch(`http://localhost:8080/api/price/${id}?ip=${ip}`);
    if (!response.ok) {
        const { error } = await response.json();
        throw new CryptoError('There was an error occurred while getting the price of crypto currency', error);
    }
    const price = await response.json();
    console.log(price);
    return price.data;
};

export { getPrice };
