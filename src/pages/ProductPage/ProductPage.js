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
import { Rating, TextField } from "@mui/material";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import { useStateValue } from "../../contexts/StateProvider";
import { useUserContext } from "../../contexts/UserContext";
import { getUsersReviewCollection } from "../../services/database";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function ProductPage() {
  const [openReview, setOpenReview] = React.useState(false);
  const [review, setReview] = React.useState(0);
  const [reviewStatement, setReviewStatement] = React.useState("");
  const location = useLocation();
  const [userReviews, setUserReviews] = React.useState({
    rating: 0,
    reviewStatement: "",
  });

  const [usersReviews, setUsersReviews] = React.useState([]);

  const {
    brand,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    title,
  } = location.state;
  const [{basket},dispatch] = useStateValue();

  const { user } = useUserContext();

  const navigate = useNavigate();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        brand: brand,
        image: images[0],
        price: price,
        stock: stock,
        rating: rating,
        discountPercentage: discountPercentage,
      },
      email: user.email,
    });
  };
  React.useEffect(() => {
    getUsersReviewCollection().then((loadedReviews) => {
      setUsersReviews([...loadedReviews.data]);
    });
  }, []);

  const handleRateProduct = () => {
    setOpenReview(true);
  };

  const handleReviewSubmit = async () => {
    setUserReviews({
      ...userReviews,
      rating: review,
      reviewStatement: reviewStatement,
    });
    const reviews = await getUsersReviewCollection();

    const newReview = {
      productId: id,
      userId: user.email,
      rating: review,
      reviewStatement: reviewStatement,
    };
    if (reviews) {
      reviews.insert(newReview);
      setOpenReview(false);
    } else {
      console.log("review error");
    }
  };

  const goToBuyNow = () => {
    dispatch({
      type: "BUY_NOW",
      item: {
        id: id,
        title: title,
        brand: brand,
        image: images[0],
        price: price,
        stock: stock,
        rating: rating,
        discountPercentage: discountPercentage,
      },
      email: user.email,
    });
    navigate("/buynow")
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <CustomAppBar />
      <Grid container>
        <Grid item lg={6}>
          <Grid
            container
            sx={{
              height: "100%",
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
                    onClick={addToCart}
                    variant="outlined"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{
                      m: 1,
                      background: "#ff9f00",
                      color: "white",
                      borderColor: "#ff9f00",
                      display: { xs: 'none', sm: 'none', lg: 'flex' },
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<FlashOnIcon />}
                    sx={{
                      m: 1,
                      background: "#fb641b",
                      color: "white",
                      borderColor: "#fb641b",
                      display: { xs: 'none', sm: 'none', lg: 'flex' }
                    }}
                    onClick={() => navigate("/buynow")}
                  >
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} component={Paper} elevation={6} square>
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

            <Grid item xs={12} sx={{display: "flex"}}>  
                <Button
                  onClick={addToCart}
                  variant="outlined"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{
                    marginRight: "10px",
                    background: "#ff9f00",
                    color: "white",
                    borderColor: "#ff9f00",
                  }}
                >
                  Add To Cart
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FlashOnIcon />}
                  sx={{
                    background: "#fb641b",
                    color: "white",
                    borderColor: "#fb641b",
                  }}
                  onClick={() => goToBuyNow()}
                >
                  Buy Now
                </Button>
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
                {openReview ? (
                  ""
                ) : (
                  <Grid item margin="10px">
                    <Paper elevation={2}>
                      <Button onClick={() => handleRateProduct()}>
                        Rate Product
                      </Button>
                    </Paper>
                  </Grid>
                )}
                {openReview && (
                  <Grid container flexDirection="column" p={2}>
                    <Grid item sx={{ borderBottom: "1px solid #999", mb: 3 }}>
                      <Typography>Rate this Product</Typography>
                      <Typography>
                        <Rating
                          name="read-only"
                          value={review}
                          onChange={(event, newValue) => {
                            setReview(newValue);
                          }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>Review This Product</Typography>
                      <TextField
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="filled"
                        sx={{ width: "100%", mb: 3, background: "white" }}
                        onChange={(e) => setReviewStatement(e.target.value)}
                      />
                    </Grid>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Button
                          variant="outlined"
                          sx={{
                            marginRight: "10px",
                            background: "#ff9f00",
                            color: "white",
                            borderColor: "1px solid #ff9f00",
                          }}
                          onClick={handleReviewSubmit}
                        >
                          SUBMIT
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Grid
              item
              xs={10}
              component={Paper}
              elevation={6}
              square
              borderRadius="10px"
            >
              {userReviews.rating > 0 && (
                <Grid
                  container
                  flexDirection="column"
                  p={2}
                  mt={2}
                  sx={{ borderBottom: "1px solid #999" }}
                >
                  <Typography>Your Review</Typography>
                  <Rating
                    name="read-only-user"
                    value={userReviews.rating}
                    readOnly
                  />
                  <Typography>{userReviews.reviewStatement}</Typography>
                </Grid>
              )}

              {usersReviews?.map((reviewItem, index) => (
                <Grid
                  key={index}
                  container
                  flexDirection="column"
                  p={2}
                  mt={2}
                  sx={{ borderBottom: "1px solid #999" }}
                >
                  <Typography>User Review</Typography>
                  <Typography fontWeight="bold">{reviewItem.userId}</Typography>
                  <Rating
                    name={`read-only-${index}`}
                    value={reviewItem.rating}
                    readOnly
                  />
                  <Typography>{reviewItem.reviewStatement}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
