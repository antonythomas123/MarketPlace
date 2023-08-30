import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import { useUserContext } from "../../contexts/UserContext";
import {
  getOrderedItemsCollection,
  getOrdersCollection,
} from "../../services/database";

function OrderPage() {
  const { user } = useUserContext();
  const [userOrders, setUserOrders] = useState([]);

  const email = user.email;

  useEffect(() => {
    const ordersCollection = getOrdersCollection();
    const orderedItemsCollection = getOrderedItemsCollection();

    if (ordersCollection && orderedItemsCollection) {
      const orderForUser = ordersCollection.findOne({ userId: email });
      setUserOrders([orderForUser]);
    }
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item sx={{ borderBottom: "1px solid #999", width: "100%" }}>
          <Typography m={2}>ORDER INFORMATION</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {userOrders.map((detail, key) =>
            detail.items.map((item, key) => (
              <Grid container mt={2}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <OrderCard
                    user={user}
                    item={item}
                    paymentDetails={detail.paymentDetails}
                  />
                </Grid>
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderPage;
