export const fetchProducCategories = async() =>{
    const fetchCategories = await fetch(`https://dummyjson.com/products/categories`);
    const response = await fetchCategories.json();
    return response;
}