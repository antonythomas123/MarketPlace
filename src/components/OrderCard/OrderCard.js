import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { useOrderContext } from "../../contexts/OrderContext";

function OrderCard({ user, item, paymentDetails }) {
  const navigate = useNavigate();

  const { setSelectedOrder } = useOrderContext();

  const handleOrderClick = () => {
    const combinedOrder = {
      paymentDetails: paymentDetails,
      items: item,
    };
    setSelectedOrder(combinedOrder);
    navigate("/orderTracking");
  };
  return (
    <Box
      component={Paper}
      width="80%"
      sx={{
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent={"center"} alignItems={"center"} onClick={() => handleOrderClick()}>
        <Grid item xs={3} ml={2}>
          <img src={item.image} alt="product_image" height={"60px"} />
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ textTransform: "uppercase" }}>
            {item.title}
          </Typography>
        </Grid>
        <Grid item xs={3} ml={2}>
          Order Status
        </Grid>
        <Grid item xs={2}>
          $ {item.price}
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderCard;
