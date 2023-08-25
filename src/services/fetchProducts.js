export const fetchProducts = async()=> {
    const fetchApiResponse = await fetch(`https://dummyjson.com/products?limit=200`);
    const apiResponseData = await fetchApiResponse.json();
    return apiResponseData;
}