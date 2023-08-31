import { Grid, Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import CartCard from "../../components/CartCard/CartCard";
import { useStateValue } from "../../contexts/StateProvider";
import { getBasketTotal } from "../../reducers/reducer";
import { useNavigate } from "react-router";
import CartContext from "../../contexts/CartContext";

function Cart() {
  const [{ basket }] = useStateValue();

  const totalPrice = getBasketTotal(basket);

  const {setIsCart} = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCart(true);
    navigate('/buynow')
  }

  return (
    <Box>
      <CustomAppBar />
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        mt={4}
      >
        <Grid item xs={12} md={6} width="50%">
          {basket.map((item) => {
            return (
              <CartCard
                price={item.price}
                title={item.price}
                stock={item.stock}
                rating={item.rating}
                image={item.image}
                id={item.id}
                actions={"REMOVE_FROM_CART"}
              />
            );
          })}
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
          <Grid
            container
            sx={{ height: {lg: "90vh", xs: "50vh"} }}
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
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  mb: 2,
                  borderBottom: "1px solid #999",
                }}
              >
                <Grid>
                  <Typography>Total Amount</Typography>
                </Grid>
                <Grid>
                  <Typography>${totalPrice}</Typography>
                </Grid>
              </Grid>

              <Grid container justifyContent="center">
                <Button fullWidth sx={{ background: "#fb641b", color: "#222" }} onClick={() => handleCheckout()}>
                  Proceed to Checkout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
