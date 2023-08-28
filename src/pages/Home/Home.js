import React, { useContext, useEffect, useState } from "react";
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

  const getProductCategories = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      const productCategories = await fetchProducCategories();
      setProducts(fetchedProducts.products);
      setCategories([...productCategories]);
      setIsCart(false);
    } catch (error) {
      console.log(error);
    }
  };

  const categorizedProducts = {};

  categories.forEach((category) => {
    categorizedProducts[category] = products.filter(
      (product) => product.category === category
    );
  });

  useEffect(() => {
    getProductCategories();
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CustomAppBar />
      <Categories products={products} />
      <Grid container>
        {categories.map((category, key) => {
          return (
            <section id={category}>
              <Grid
                key={key}
                item
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
              >
                <Products
                  category={category}
                  products={categorizedProducts[category]}
                />
              </Grid>
            </section>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
