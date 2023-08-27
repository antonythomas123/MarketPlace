import { Grid, Paper, Typography, Button } from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import CartCard from "../../components/CartCard/CartCard";
import { useStateValue } from "../../contexts/StateProvider";
import { getBasketTotal } from "../../reducers/reducer";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  const totalPrice = getBasketTotal(basket);

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
          {basket.map((item) => {
            return (
              <CartCard
                price={item.price}
                title={item.price}
                stock={item.stock}
                rating={item.rating}
                image={item.image}
                id={item.id}
              />
            );
          })}
        </Grid>

        <Grid item xs={5} justifyContent="center" alignItems="center">
          <Grid
            container
            sx={{ height: "90vh" }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item component={Paper} width="70%" p={2}>
              <Typography sx={{ borderBottom: "1px solid #999" }}>
                PRICE DETAILS
              </Typography>
              <Grid item sx={{ borderBottom: "1px dashed #999", mt: 2 }}>
                <Typography>Price ({basket?.length} items)</Typography>
                <Typography>Discount</Typography>
                <Typography>Delivery Charges</Typography>
                <Typography mb={2}>Secured Packaging Fee</Typography>
              </Grid>
              <Grid
                item
                sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 2, borderBottom: "1px solid #999" }}
              >
                <Grid>
                  <Typography>Total Amount</Typography>
                </Grid>
                <Grid>
                  <Typography>${totalPrice}</Typography>
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Button fullWidth sx={{background: "#fb641b", color: "#222"}}>Proceed to Checkout</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
