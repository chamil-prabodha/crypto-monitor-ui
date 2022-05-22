

const getPrice = async (id, ip) => {
    const response = await fetch(`http://localhost:8080/api/price/${id}?ip=${ip}`);
    const price = await response.json();
    console.log(price);
    return price.data;
};

export { getPrice };