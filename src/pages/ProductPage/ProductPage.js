import * as React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { Rating } from "@mui/material";

const defaultTheme = createTheme();

export default function ProductPage() {
  const location = useLocation();

  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    title,
  } = location.state;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item sx={{ width: "50%" }}>
          <Grid
            container
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Slider images={images} />
              <Grid
                sx={{
                  width: "60%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="outlined"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ width: "50%", m: 1,  background: "#ff9f00", color: "white", borderColor: "#ff9f00" }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<FlashOnIcon />}
                    sx={{ width: "50%", m: 1, background: "#fb641b", color: "white", borderColor: "#fb641b" }}
                  >
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Grid
            container
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid item>
              <Typography component="h1">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography>{brand}</Typography>
            </Grid>
            <Grid
              item
              sx={{
                background: "#26a541",
                color: "white",
                width: "80px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <Typography fontSize="12px">{rating} ratings</Typography>
            </Grid>

            <Grid item color="#26a541">
              <Typography variant="subtitle 1">Special Price</Typography>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="space-between"
              width="30%"
            >
              <Typography variant="h4">${price}</Typography>
              <Typography color="#26a541">{discountPercentage}% Off</Typography>
            </Grid>

            <Grid item>
              <Typography color="#999" fontSize="12px">
                In Stock : {stock}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid>
                <Button
                  variant="outlined"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{width: "30%", marginRight: "10px", background: "#ff9f00", color: "white", borderColor: "#ff9f00"}}
                >
                  Add To Cart
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FlashOnIcon />}
                  sx={{width: "30%", background: "#fb641b", color: "white", borderColor: "#fb641b"}}
                >
                  Buy Now
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>Product Description</Typography>
              <Typography>{description}</Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid
              item
              xs={10}
              component={Paper}
              elevation={6}
              square
              borderRadius="10px"
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item sx={{ padding: "10px" }}>
                  <Typography fontWeight="bold">
                    User Ratings & Reviews
                  </Typography>
                  <Rating name="read-only" value={rating} readOnly />
                </Grid>
                <Grid item margin="10px">
                  <Paper elevation={2}>
                    <Button>Rate Product</Button>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
