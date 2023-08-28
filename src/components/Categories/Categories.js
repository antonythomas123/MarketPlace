import React from "react";
import "./Categories.css";
import { Grid, Typography } from "@mui/material";
import * as Scroll from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const ScrollLink = Scroll.Link;

function Categories({ products }) {
  const location = useLocation();

  const categoryImageMap = {};

  products.forEach((product) => {
    if (!categoryImageMap[product.category]) {
      categoryImageMap[product.category] = product.images[0];
    }
  });

  return (
    <div className="categories_main">
      {Object.keys(categoryImageMap).map((category, key) => (
        <ScrollLink
          key={key} // Use key as the key prop
          to={category}
          spy
          smooth={true}
          offset={-100}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              minWidth: "100px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={categoryImageMap[category]}
              alt={category}
              style={{
                maxWidth: "50px",
                height: "50px",
                borderRadius: "100px",
              }}
            />

            <Typography fontSize="12px">{category}</Typography>
          </Grid>
        </ScrollLink>
      ))}
    </div>
  );
}

export default Categories;
