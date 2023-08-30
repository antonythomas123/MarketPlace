import {
  Avatar,
  Grid,
  Typography,
  Paper,
  Toolbar,
  TextField,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import { Box } from "@mui/system";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import RadioGroup from "@mui/material/RadioGroup";
import { useUserContext } from "../../contexts/UserContext";
import OrderPage from "../OrderPage/OrderPage";

function ProfilePage() {
  const { user } = useUserContext();

  const [toggle, setToggle] = useState(false);

  const handleOrderOpen = () => {
    setToggle(true);
  };

  return (
    <Box>
      <CustomAppBar />
      <Grid container>
        <Grid item xs={3} lg={1}>
          <Grid container justifyContent="center" mt={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid #999",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar />
              <Grid sx={{ p: 1 }}>
                <Grid item>
                  <Typography>
                    {user.fname ? user.fname : ""}{" "}
                    {user.lname ? user.lname : ""}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 1,
                  borderBottom: "1px solid #222",
                }}
                onClick={handleOrderOpen}
              >
                <LocalShippingIcon />
                <Typography fontSize={12} sx={{ ml: 1 }}>
                  MY ORDERS
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 1,
                  borderBottom: "1px solid #222",
                }}
                onClick={() => setToggle(false)}
              >
                <PersonIcon />
                <Typography fontSize={12}>Profile</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={9}
          lg={11}
          elevation={6}
          square
          sx={{ height: "94vh" }}
          component={Paper}
        >
          {toggle === false ? (
            <Grid container justifyContent="center" flexDirection={"column"}>
              <Grid item ml={2} mt={2}>
                <Typography>Personal Information</Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: { xs: "grid", lg: "flex" },
                  justifyContent: "space-evenly",
                  placeItems: 'center',
                  mt: 2,
                }}
              >
                <TextField
                  variant="outlined"
                  label={user.fname ? user.fname : ""}
                  disabled
                  sx={{mb: 2}}
                />
                <TextField
                  variant="outlined"
                  label={user.lname ? user.lname : ""}
                  disabled
                />
              </Grid>
              <Grid item ml={2} mt={2}>
                <Typography>Your Gender</Typography>
              </Grid>
              <Grid
                item
                sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}
              >
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    checked
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
              <Grid item ml={2} mt={2}>
                <Typography>Email Address</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}
              >
                <TextField
                  sx={{ width: "50%" }}
                  variant="outlined"
                  label={user.email ? user.email : ""}
                  disabled
                ></TextField>
              </Grid>
            </Grid>
          ) : (
            <OrderPage />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
