import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

function BuyNowForm({ paymentDetails, setPaymentDetails }) {
  return (
    <Grid
      container
      component={Paper}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        sx={{ p: 2, mb: 2, borderBottom: "1px solid #999", width: "100%" }}
      >
        <Typography>Delivery Address</Typography>
      </Grid>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container>
          <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              id="firstName"
              label="First Name"
              autoFocus
              sx={{ width: { lg: "100%", xs: "90%" }, mb: 2 }}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  fname: e.target.value,
                })
              }
            />
            <TextField
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              sx={{ width: { lg: "100%", xs: "90%" } }}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  lname: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              required
              sx={{ width: { lg: "100%", xs: "90%" } }}
              id="phone"
              label="Phone Number"
              name="phone"
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  phone: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              required
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              sx={{ width: { lg: "100%", xs: "90%" } }}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  address: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} mt={2} mb={2}>
            <TextField
              required
              name="pincode"
              label="Pin Code"
              type="pincode"
              id="pincode"
              autoComplete="pincode"
              sx={{ width: { lg: "100%", xs: "90%" } }}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  pincode: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BuyNowForm;
