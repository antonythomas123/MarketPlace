import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function BuyNowForm({ paymentDetails, setPaymentDetails }) {
  return (
    <Box component="form">
      <Grid container>
        <Grid
          item
          sx={{ p: 2, mb: 2, borderBottom: "1px solid #999", width: "100%" }}
        >
          <Typography>Delivery Address</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              id="firstName"
              label="First Name"
              autoFocus
              sx={{ width: "40%", mr: 2 }}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, fname: e.target.value })
              }
            />
            <TextField
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              sx={{ width: "40%" }}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, lname: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              sx={{ width: "82%" }}
              id="phone"
              label="Phone Number"
              name="phone"
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, phone: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              sx={{ width: "82%" }}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, address: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="pincode"
              label="Pin Code"
              type="pincode"
              id="pincode"
              autoComplete="pincode"
              sx={{ width: "82%" }}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, pincode: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BuyNowForm;
