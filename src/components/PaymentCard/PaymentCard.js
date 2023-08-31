import {
  Box,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentCard = ({
  cardDetails,
  setCardDetails,
  handleInputChange,
  handleInputFocus,
}) => {
  return (
    <Box
      component={Paper}
      sx={{
        width: "100%",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          padding: 2,
        }}
      >
        <Grid item xs={12} lg={6} mt={2}>
          <Cards
            number={cardDetails.number}
            expiry={cardDetails.expiry}
            cvc={cardDetails.cvc}
            name={cardDetails.name}
            focused={cardDetails.focus}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          mt={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          
        >
          <FormControl>
            <Grid container spacing={1} >
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={cardDetails.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  sx={{width: {lg:"100%", xs: '100%'}}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  value={cardDetails.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  sx={{width: {lg:"100%", xs: '100%'}}}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent={'space-between'}>
                  <Grid item xs={6}>
                    <TextField
                      type="tel"
                      name="expiry"
                      className="form-control"
                      placeholder="Valid Thru"
                      pattern="\d\d/\d\d"
                      required
                      value={cardDetails.expiry}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      sx={{width: {xs: "70%", lg: '90%'}}}
                    />
                  </Grid>

                  <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
                    <TextField
                      type="tel"
                      name="cvc"
                      className="form-control"
                      placeholder="CVC"
                      pattern="\d{3,4}"
                      required
                      value={cardDetails.cvc}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      sx={{width: {xs: "70%", lg: '100%'}}}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentCard;
