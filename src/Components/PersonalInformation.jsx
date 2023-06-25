import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setcontact, updatecontact } from "../Redux/actions/setcontact";
import fieldCd from "../Redux/constants/typeCodes";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  Box,
  Card,
  FormControl,
  Button,
  Typography,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";

function PersonalInformation(props) {
  // 'react-hook-form' for Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Snackbar state for displaying success message
  const [open, setOpen] = useState(false);

  // for navigation between pages
  const navigate = useNavigate();

  // Form submission
  const onSubmit = (data) => {
    if (props.contact !== null) {
      // Update
      props.updatecontact(data);
    } else {
      // Set
      props.setcontact(data);
    }
    setOpen(true);
    navigate("/Detailfilling");
  };

  // Close the snackbar
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Main content */}
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justifty-center items-center mt-10">
        <Typography
          className="mt-4 font-bold text-2xl text-center md:text-1xl"
          variant="h4"
        >
          <AccountBoxIcon /> Personal Information
        </Typography>

        {/* Card component */}
        <Card
          style={{
            borderRadius: "5px",
            border: "2px solid",
            backgroundColor: "rgb(255, 255, 255)",
            padding: "5vw 5vw",
          }}
        >
          {/* Input fields */}
          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto">
            <TextField
              label="FIRST NAME"
              {...register(fieldCd.FirstName, { required: true })}
              defaultValue={
                props.contact ? props.contact[fieldCd.FirstName] : ""
              }
              error={errors[fieldCd.FirstName] ? true : false}
              helperText={errors[fieldCd.FirstName] && "First name is required"}
            />

            <TextField
              label="LAST NAME"
              {...register(fieldCd.LastName, { required: true })}
              defaultValue={
                props.contact ? props.contact[fieldCd.LastName] : ""
              }
              error={errors[fieldCd.LastName] ? true : false}
              helperText={errors[fieldCd.LastName] && "Last name is required"}
            />
          </Box>

          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto mt-4">
            <TextField
              label="E-MAIL"
              {...register(fieldCd.Email, {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              defaultValue={props.contact ? props.contact[fieldCd.Email] : ""}
              error={errors[fieldCd.Email] ? true : false}
              helperText={
                errors[fieldCd.Email] && "Please enter a valid email address"
              }
            />
            <TextField
              label="MOBILE"
              {...register(fieldCd.Mobile, {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              defaultValue={props.contact ? props.contact[fieldCd.Mobile] : ""}
              error={errors[fieldCd.Mobile] ? true : false}
              helperText={
                errors[fieldCd.Mobile] &&
                "Please enter a 10-digit mobile number"
              }
            />
          </Box>

          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto mt-4">
            <TextField
              label="CITY"
              {...register(fieldCd.City, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.City] : ""}
              error={errors[fieldCd.City] ? true : false}
              helperText={errors[fieldCd.City] && "City is required"}
            />
            <TextField
              label="STATE"
              {...register(fieldCd.State, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.State] : ""}
              error={errors[fieldCd.State] ? true : false}
              helperText={errors[fieldCd.State] && "State is required"}
            />
          </Box>

          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto mt-4">
            <TextField
              label="PIN-CODE"
              {...register(fieldCd.Postal, {
                required: true,
                pattern: /^[0-9]{6}$/,
              })}
              defaultValue={props.contact ? props.contact[fieldCd.Postal] : ""}
              error={errors[fieldCd.Postal] ? true : false}
              helperText={
                errors[fieldCd.Postal] &&
                "Please enter a valid 6-digit pin-code"
              }
            />
            <TextField
              type="date"
              {...register(fieldCd.Dob, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.Dob] : ""}
              error={errors[fieldCd.Dob] ? true : false}
              helperText={errors[fieldCd.Dob] && "Date of Birth is required"}
            />
          </Box>

          {/* Address textarea */}
          <FormControl style={{ width: "100%", marginTop: "2vh" }}>
            <label>ADDRESS</label>
            <textarea
              style={{ border: "1px solid black", borderRadius: "10px" }}
              {...register(fieldCd.Address, { required: true })}
              defaultValue={props.contact ? props.contact[fieldCd.Address] : ""}
              error={errors[fieldCd.Address] ? true : false}
            ></textarea>
            {errors[fieldCd.Address] && (
              <span className="text-red-500">Address is required</span>
            )}
          </FormControl>

          {/* Objective textarea */}
          <FormControl style={{ width: "100%", marginTop: "2vh" }}>
            <label>OBJECTIVE</label>
            <textarea
              style={{ border: "1px solid black", borderRadius: "10px" }}
              {...register(fieldCd.Objective, { required: true })}
              defaultValue={
                props.contact ? props.contact[fieldCd.Objective] : ""
              }
              error={errors[fieldCd.Objective] ? true : false}
            ></textarea>
            {errors[fieldCd.Objective] && (
              <span className="text-red-500">Objective is required</span>
            )}
          </FormControl>

          {/* Details Submit button */}
          <div style={{ marginTop: "2vw" }}>
            <Button
              style={{
                marginLeft: "40%",
                backgroundColor: "green",
                color: "#fff",
                width: "20%",
              }}
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {props.contact ? "Update" : "Submit"}
            </Button>
          </div>
        </Card>
      </div>
      {/* Snackbar for success message */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Personal Details Submitted!
        </Alert>
      </Snackbar>
    </>
  );
}

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setcontact: (contact) => dispatch(setcontact(contact)),
    updatecontact: (contact) => dispatch(updatecontact(contact)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformation);
