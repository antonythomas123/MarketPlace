import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link as Li } from "react-router-dom";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { getUsersCollection } from "../../services/database";
import { useUserContext } from "../../contexts/UserContext";

const defaultTheme = createTheme();

export default function SignInSide() {
  const [signInDetails, setSignInDetails] = React.useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const {setUser } = useUserContext();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const users = await getUsersCollection();
    const user = users?.findOne({ email: signInDetails.email });

    if (signInDetails.email === "") {
      setMessage("Email Cannot be Empty !");
      setOpen(true);
    } else if (signInDetails.password === "") {
      setMessage("Password cannot be Empty !");
      setOpen(true);
    } else if (user) {
      if (user?.password === signInDetails.password) {
        setMessage("User signed in successfully");
        setOpen(true);
        setUser(user);
        navigate("/home");
      }else{
        setMessage("Invalid Password!");
        setOpen(true);
      }
    } else {
      setMessage("Invalid Username or Password ! Create an account");
      navigate("/signup");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setSignInDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setSignInDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Li to={"/forgot"}>Forgot password?</Li>
                </Grid>
                <Grid item>
                  <Li to={"/signup"}>{"Don't have an account? Sign Up"}</Li>
                </Grid>
              </Grid>
            </Box>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={message}
              action={action}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
