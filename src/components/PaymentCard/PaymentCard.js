import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
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
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Cards
        number={cardDetails.number}
        expiry={cardDetails.expiry}
        cvc={cardDetails.cvc}
        name={cardDetails.name}
        focused={cardDetails.focus}
      />
      <Container>
        <FormControl>
          <Grid sx={{ m: 1 }}>
            <TextField
              type="number"
              name="number"
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid sx={{ m: 1 }}>
            <TextField
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              value={cardDetails.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </Grid>
          <Grid sx={{ m: 1 }}>
            <Grid>
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
              />
            </Grid>
            <Grid sx={{ mt: 2 }}>
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
              />
            </Grid>
          </Grid>
        </FormControl>
      </Container>
    </Box>
  );
};

export default PaymentCard;
