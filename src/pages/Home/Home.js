import React, { useCallback, useContext, useEffect, useState } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import Categories from "../../components/Categories/Categories";
import { fetchProducts } from "../../services/fetchProducts";
import Products from "../../components/Products/Products";
import { Grid } from "@mui/material";
import { fetchProducCategories } from "../../services/fetchProductCategories";
import CartContext from "../../contexts/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const {setIsCart} = useContext(CartContext);

  const getProductCategories = useCallback(async () => {
    try {
      const fetchedProducts = await fetchProducts();
      const productCategories = await fetchProducCategories();
      setProducts(fetchedProducts.products);
      setCategories([...productCategories]);
      setIsCart(false);
    } catch (error) {
      console.log(error);
    }
  }, [setIsCart])

  const categorizedProducts = {};

  categories.forEach((category) => {
    categorizedProducts[category] = products.filter(
      (product) => product.category === category
    );
  });

  useEffect(() => {
    getProductCategories();
    // window.scrollTo(0, 0);
  }, [getProductCategories]);
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
                sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
                xs={12}
                id={category}
              >
                <Products
                  category={category}
                  products={categorizedProducts[category]}
                />
              </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
