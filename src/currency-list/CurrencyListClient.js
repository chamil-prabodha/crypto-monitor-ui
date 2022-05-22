const getCurrencyList = async () => {
    const response = await fetch('http://localhost:8080/api/currency/list');
    const currencies = await response.json();
    return currencies.data;
};

export { getCurrencyList };