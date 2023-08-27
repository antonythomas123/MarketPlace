import React, { useState } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  FormControl,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import BuyNowForm from "../../components/BuyNowForm/BuyNowForm";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import { useNavigate } from "react-router";

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

  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setCardDetails((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const handleBuy = () => {
    alert("Order placed Successfully!")
    navigate('/home');
  };

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
              <Typography>Antony Thomas</Typography>
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
                PAY & BUY
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BuyNow;
