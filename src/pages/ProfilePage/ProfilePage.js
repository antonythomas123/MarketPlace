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
import React from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import { Box } from "@mui/system";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import RadioGroup from '@mui/material/RadioGroup';


function ProfilePage() {
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
                  <Typography>Antony Thomas</Typography>
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
              <Grid item sx={{ borderBottom: "1px solid #999" }}>
                <Toolbar>
                  <Typography>
                    <LocalShippingIcon />
                  </Typography>
                  <Typography sx={{ ml: 1 }}>MY ORDERS</Typography>
                </Toolbar>
              </Grid>

              <Grid item>
                <Toolbar>
                  <PersonIcon />
                  <Typography sx={{ ml: 1 }}>ACCOUNT SETTINGS</Typography>
                </Toolbar>
                <Grid container flexDirection="column" ml={8}>
                  <Typography>Profile Information</Typography>
                  <Typography>Manage Addresses</Typography>
                  <Typography>Pan Card Information</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item elevation={6} square sx={{width: "60%", height: "94vh"}}  component={Paper}>
          <Grid>
            <Grid item ml={2} mt={2}>
              <Typography>Personal Information</Typography>
            </Grid>
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}
            >
              <TextField variant="outlined" label="Antony" disabled></TextField>
              <TextField variant="outlined" label="Thomas" disabled></TextField>
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
              <TextField sx={{width: "50%"}} variant="outlined" label="antonythomas993@gmail.com" disabled></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
