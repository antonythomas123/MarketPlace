import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useStateValue } from "../../contexts/StateProvider";
import { useUserContext } from "../../contexts/UserContext";

function CartCard({ title, stock, image, id, actions, price }) {
  const [dispatch] = useStateValue();
  const { user } = useUserContext();

  const handleRemoveFromCart = () => {
    if (actions === "REMOVE_FROM_CART") {
      dispatch({
        type: "REMOVE_FROM_CART",
        item: {
          id: id,
        },
        email: user.email,
      });
    } else {
      dispatch({
        type: "REMOVE_FROM_BUY_NOW",
        item: {
          id: id,
        },
        email: user.email,
      });
    }
  };
  return (
    <Grid
      container
      component={Paper}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        sx={{ display: "flex", flexDirection: { lg: "row", xs: "column" } }}
        justifyContent="center"
        alignItems="center"
      >
        <img src={image} alt="product_image" style={{ height: "140px" }} />
      </Grid>

      <Grid
        item
        xs={12}
        lg={8}
        sx={{
          paddingLeft: { xs: 0, lg: 4 },
        }}
      >
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item>
            <Typography>$ {price}</Typography>
          </Grid>
          <Grid item>
            <Typography>Stock : {stock}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item m={1}>
        <Button variant="outlined" onClick={() => handleRemoveFromCart()}>
          Remove
        </Button>
      </Grid>
    </Grid>
  );
}

export default CartCard;
