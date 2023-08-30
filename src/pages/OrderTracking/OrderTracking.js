import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import Stepper from "@mui/material/Stepper";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import { useOrderContext } from "../../contexts/OrderContext";
import {
  getOrderedItemsCollection,
  updateOrderedItemStatus,
} from "../../services/database";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2fba6d",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2fba6d",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#2fba6d",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#2fba6d",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

const steps = ["Order Confirmed", "Shipped", "Out for Delivery", "Delivered"];

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

function OrderTracking() {
  const { selectedOrder } = useOrderContext();

  const [currentStep, setCurrentStep] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 10000);

    if (currentStep === steps.length - 1) {
      setOrderStatus("Delivered");
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentStep]);

  useEffect(() => {
    if (orderStatus === "Delivered") {
      updateOrderedItemStatus(selectedOrder.id, "Delivered");
    }
  }, [orderStatus, selectedOrder.id]);

  return (
    <Box sx={{ width: "100%" }}>
      <CustomAppBar />
      <Grid
        container
        width="100%"
        justifyContent={"center"}
        alignItems={"center"}
        mt={3}
      >
        {/* {First grid} */}
        <Grid item xs={10} component={Paper}>
          <Grid container>
            <Grid item xs={12} sx={{ borderBottom: "1px solid #222", p: 2 }}>
              <Typography>Delivery Address</Typography>
            </Grid>

            <Grid item xs={12} p={2}>
              <Typography fontWeight={"bold"}>
                {selectedOrder.paymentDetails.fname}{" "}
                {selectedOrder.paymentDetails.lname}
              </Typography>
              <Typography>{selectedOrder.paymentDetails.address}</Typography>
              <Typography>{selectedOrder.paymentDetails.pincode}</Typography>
            </Grid>
            <Grid item xs={12} p={2}>
              <Typography fontWeight={"bold"}>Phone</Typography>
              <Typography>{selectedOrder.paymentDetails.phone}</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* {SecondGrid} */}
        <Grid
          item
          xs={10}
          component={Paper}
          p={2}
          mt={4}
          sx={{
            display: { xs: "block", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={selectedOrder.items.image}
                alt="image"
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "contain",
                }}
              />
              <Grid
                item
                xs={12}
                lg={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography fontSize="14px" fontWeight="bold">
                  {selectedOrder.title}
                </Typography>
                <Typography fontSize="12px">
                  {selectedOrder.items.brand}
                </Typography>
                <Typography fontWeight="bold">
                  $ {selectedOrder.items.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            mt={2}
          >
            <Stepper
              alternativeLabel
              activeStep={currentStep}
              connector={<QontoConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderTracking;
