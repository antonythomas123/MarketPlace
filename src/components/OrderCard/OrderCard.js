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
        display: { lg: "flex", xs: "block" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => handleOrderClick()}
      >
        <Grid
          item
          mt={2}
          xs={12}
          display={'flex'}
          justifyContent={"center"}
          alignItems={"center"}
          lg={3}
        >
          <img src={item.image} alt="product_image" height={"100px"} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography textAlign={'center'} sx={{ textTransform: "uppercase" }}>
            {item.title}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} ml={2} textAlign={'center'}>
          Order Status
        </Grid>
        <Grid item xs={12} lg={2} textAlign={'center'}>
          $ {item.price}
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderCard;
