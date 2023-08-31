import React, { useContext, useState } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Snackbar,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import BuyNowForm from "../../components/BuyNowForm/BuyNowForm";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import { useNavigate } from "react-router";
import { useStateValue } from "../../contexts/StateProvider";
import { useUserContext } from "../../contexts/UserContext";
import CartCard from "../../components/CartCard/CartCard";
import { getBasketTotal, getBuyNowTotal } from "../../reducers/reducer";
import CartContext from "../../contexts/CartContext";
import {
  getOrderedItemsCollection,
  getOrdersCollection,
} from "../../services/database";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function BuyNow() {
  const [paymentDetails, setPaymentDetails] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
  });
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const [{ basket, directBuyNowProduct }] = useStateValue();
  const { isCart } = useContext(CartContext);
  const totalPrice = getBasketTotal(basket);
  const buyNowPrice = getBuyNowTotal(directBuyNowProduct);

  const { user } = useUserContext();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setCardDetails((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const handleBuy = () => {
    if (
      paymentDetails.fname === "" ||
      paymentDetails.lname === "" ||
      paymentDetails.address === "" ||
      paymentDetails.phone === "" ||
      paymentDetails.pincode === ""
    ) {
      setMessage("Please Enter all Delivery Details");
      setOpen(true)
    } else if (
      cardDetails.number === "" ||
      cardDetails.name === "" ||
      cardDetails.expiry === "" ||
      cardDetails.cvc === ""
    ) {
      setMessage("Please Enter Card Details");
      setOpen(true)
    } else {
      const order = {
        userId: user.email,
        paymentDetails,
        items: basket.concat(directBuyNowProduct),
        total: totalPrice ? totalPrice : buyNowPrice,
        timestamp: new Date().toISOString(),
      };

      const ordersCollection = getOrdersCollection();
      const orderedItemsCollection = getOrderedItemsCollection();

      if (ordersCollection && orderedItemsCollection) {
        const insertedOrder = ordersCollection.insert(order);

        insertedOrder.items.forEach((item) => {
          const orderedItem = {
            orderId: insertedOrder.$loki,
            productId: item.id,
            quantity: 1,
            status: "order_placed",
          };
          orderedItemsCollection.insert(orderedItem);
        });
      }
      alert("Order placed Successfully!");
      navigate("/home");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box>
      <CustomAppBar />

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid
          item
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container component={Paper} xs={6} m={2}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "12px",
                height: "80px",
              }}
            >
              <Typography textTransform={'uppercase'}>{user.fname} {user.lname}</Typography>
              <Button variant="outlined" endIcon={<DoneIcon />}>
                Login
              </Button>
            </Grid>
          </Grid>

          <Grid container component={Paper} xs={6} m={2}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingLeft: "12px",
              }}
            >
              <BuyNowForm
                paymentDetails={paymentDetails}
                setPaymentDetails={setPaymentDetails}
              />
            </Grid>
          </Grid>

          {isCart && basket.length > 0 ? (
            <Grid container component={Paper} xs={6} m={2}>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  paddingLeft: "12px",
                  m: 2,
                }}
              >
                {basket.map((item) => (
                  <CartCard
                    price={item.price}
                    title={item.price}
                    stock={item.stock}
                    rating={item.rating}
                    image={item.image}
                    id={item.id}
                    actions={"REMOVE_FROM_CART"}
                  />
                ))}
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  m: 2,
                }}
              >
                <Typography>Total : {totalPrice}</Typography>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          {directBuyNowProduct.length > 0 ? (
            <Grid container m={2}>
              <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingLeft: "12px",
                m: 2,
              }}
            >
                {directBuyNowProduct.map((item) => (
                  <CartCard
                    price={item.price}
                    title={item.title}
                    stock={item.stock}
                    rating={item.rating}
                    image={item.image}
                    id={item.id}
                    actions={"REMOVE_FROM_BUY_NOW"}
                  />
                ))}
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  m: 2,
                }}
              >
                <Typography>
                  Total : {totalPrice ? totalPrice : buyNowPrice}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            " "
          )}

          <Grid container m={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingLeft: "12px",
                m: 2,
              }}
            >
              <PaymentCard
                cardDetails={cardDetails}
                setCardDetails={setCardDetails}
                handleInputChange={handleInputChange}
                handleInputFocus={handleInputFocus}
              />
            </Grid>
          </Grid>

          <Grid container xs={6} m={2}>
            <Grid item sx={{ width: "100%" }}>
              <Button onClick={() => handleBuy()} variant="outlined" fullWidth>
                {totalPrice ? totalPrice : buyNowPrice} PAY & BUY
              </Button>
            </Grid>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={message}
              action={action}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BuyNow;
