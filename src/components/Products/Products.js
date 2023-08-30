import React from "react";
import "./Products.css"
import { Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ProductCard from "../ProductCard/ProductCard";

function Products({ category, products }) {
  return (
      <Paper sx={{width: "90%", mb: 2, p: 2}} >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ m: 3 }}>
            <Typography textTransform="uppercase">{category}</Typography>
          </Grid>
          <div container sx={{ m: 2}} spacing={3} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }} className="products">
            {products.map((product, key) => {
              return (
                <Grid item style={{ display: 'inline-block', marginRight: '16px' }}>
                    <ProductCard product={product} />
                </Grid>
              );
            })}
          </div>
        </Grid>
      </Paper>
  );
}

export default Products;
