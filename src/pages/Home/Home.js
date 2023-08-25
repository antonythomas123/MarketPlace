import React, { useEffect, useState } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import Categories from "../../components/Categories/Categories";
import { fetchProducts } from "../../services/fetchProducts";
import Products from "../../components/Products/Products";
import { Grid } from "@mui/material";
import { fetchProducCategories } from "../../services/fetchProductCategories";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProductCategories = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      const productCategories = await fetchProducCategories();
      setProducts(fetchedProducts.products);
      setCategories([...productCategories]);
    } catch (error) {
      console.log(error);
    }
  };

  const categorizedProducts = {};

  categories.forEach((category) => {
    //console.log(category)
    categorizedProducts[category] = products.filter(
      (product) => product.category === category
    );
  });

  useEffect(() => {
    getProductCategories();
  }, []);
  return (
    <div>
      <CustomAppBar />
      <Categories products={products} />
      <Grid container>
        {categories.map((category, key) => {
          return (
            <Grid
              key={key}
              item
              sx={{ display: "flex", justifyContent: "center" }}
              xs={12}
            >
              <Products category={category} products={categorizedProducts[category]} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
