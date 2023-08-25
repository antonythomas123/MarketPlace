import { Grid, Paper, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import CartCard from "../../components/CartCard/CartCard";

function Cart() {
  return (
    <Box>
      <CustomAppBar />
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item width="50%">
          <CartCard />
        </Grid>

        <Grid
          item
          xs={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container sx={{ height: "90vh"}} justifyContent="center" alignItems="center">
            <Grid item component={Paper} width="70%" p={2}>
              <Typography sx={{ borderBottom: "1px solid #999" }}>
                PRICE DETAILS
              </Typography>
              <Grid item sx={{ borderBottom: "1px dashed #999", mt: 2 }}>
                <Typography>Price (3 item)</Typography>
                <Typography>Discount</Typography>
                <Typography>Delivery Charges</Typography>
                <Typography mb={2}>Secured Packaging Fee</Typography>
              </Grid>
              <Grid
                item
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Grid>
                  <Typography>Total Amount</Typography>
                </Grid>
                <Grid>
                  <Typography>$10457</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
