import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

function CartCard() {
  return (
    <Grid item sx={{ width: "100%"}} component={Paper} p={3}>
      <Grid
        container
        sx={{ height: "100%" }}
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
            <img src="" alt="image" />
          </Grid>
          <Grid container flexDirection="column">
            <Typography>Iphone 6</Typography>
            <Typography>Stock : </Typography>
            <Grid
              container
              sx={{
                width: "100%",
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
