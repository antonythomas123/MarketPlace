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
        <Grid item sx={{ width: "40%" }}>
          <Grid container justifyContent="center">
            <Grid
              item
              component={Paper}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                m: 1,
                p: 1,
                borderRadius: "10px",
              }}
              xs={8}
            >
              <Avatar />
              <Grid sx={{ p: 1 }}>
                <Grid item>
                  <Typography fontSize="14px">Hello,</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    {user.fname ? user.fname : ""}{" "}
                    {user.lname ? user.lname : ""}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ mt: 1, display: "flex", justifyContent: "center" }}
          >
            <Grid
              component={Paper}
              item
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                m: 1,
                p: 1,
                borderRadius: "10px",
              }}
            >
              <Grid
                item
                sx={{ borderBottom: "1px solid #999" }}
                onClick={handleOrderOpen}
              >
                <Toolbar>
                  <Typography>
                    <LocalShippingIcon />
                  </Typography>
                  <Typography sx={{ ml: 1 }}>MY ORDERS</Typography>
                </Toolbar>
              </Grid>

              <Grid item onClick={() => setToggle(false)}>
                <Toolbar>
                  <PersonIcon />
                  <Typography sx={{ ml: 1 }}>ACCOUNT SETTINGS</Typography>
                </Toolbar>
                <Grid container flexDirection="column" ml={8}>
                  <Typography>Profile Information</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          elevation={6}
          square
          sx={{ width: "60%", height: "94vh" }}
          component={Paper}
        >
          {toggle === false ? (
            <Grid container justifyContent="center">
              <Grid item ml={2} mt={2}>
                <Typography>Personal Information</Typography>
              </Grid>
              <Grid
                item
                sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}
              >
                <TextField
                  variant="outlined"
                  label={user.fname ? user.fname : ""}
                  disabled
                ></TextField>
                <TextField
                  variant="outlined"
                  label={user.lname ? user.lname : ""}
                  disabled
                ></TextField>
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
            <OrderPage/>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
