import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

function CartCard({ price, title, stock, rating, image }) {
  return (
    <Grid item sx={{ width: "100%" }} component={Paper}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          sx={{ display: "flex", flexDirection: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid mr={4}>
            <img src={image} alt="image" style={{height: "140px"}}/>
          </Grid>
          <Grid container flexDirection="column">
            <Typography>{title}</Typography>
            <Typography>Stock : {stock}</Typography>
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <Button variant="outlined">Save for Later</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Remove</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CartCard;
