import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { useStateValue } from "../../contexts/StateProvider";
import { useUserContext } from "../../contexts/UserContext";

function CartCard({ title, stock, image, id, actions }) {
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
    }else{
      dispatch({
        type: "REMOVE_FROM_BUY_NOW",
        item: {
          id: id,
        },
        email: user.email
      })
    }
  };
  return (
    <Grid item sx={{ width: "100%" }} component={Paper}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          sx={{ display: "flex", flexDirection: "row" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid mr={4}>
            <img src={image} alt="product_image" style={{ height: "140px" }} />
          </Grid>
          <Grid container flexDirection="column">
            <Typography>{title}</Typography>
            <Typography>Stock : {stock}</Typography>
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* <Grid item>
                <Button variant="outlined">Save for Later</Button>
              </Grid> */}
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => handleRemoveFromCart()}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CartCard;
