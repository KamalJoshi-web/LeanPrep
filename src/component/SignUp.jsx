import { React, useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Box,
  TextField,
  MenuItem,
  Backdrop,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonalDetails from "./PersonalDetails";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const jobStatus = ["Product Manager", "Web Developer", "Web Designer"];

  const [open, setOpen] = useState(false);
  const handleNext = (e) => {
    setOpen(true);
    e.preventDefault();
  };
  return (
    <Stack className="SignBoxes">
      <Typography fontSize="40px" mt={2}>
        Sign Up
      </Typography>
      <Stack flexDirection="row" alignItems="center">
        <span
          style={{
            color: "#616161",
            textAlign: "end",
            fontSize: "24px",
          }}
          className="ExtraSmall"
        >
          Already a memeber?
        </span>
        <Button
          sx={{
            color: "#4A51FA",
            fontSize: "24px",
            textDecoration: "underline",
            textTransform: "none",
          }}
        >
          Login
        </Button>
      </Stack>
      {/* Form */}
      <Stack component="form" gap={3} onSubmit={handleSubmit(handleNext)}>
        {/* Name Inputs */}
        <Stack flexDirection="row" gap={5}>
          <Box>
            <Typography className="fonts">First Name</Typography>
            <TextField
              size="small"
              type="text"
              {...register("fName", { required: true })}
              error={!!errors?.fName}
            />
          </Box>
          <Box>
            <Typography className="fonts">Last Name</Typography>
            <TextField size="small" type="text" />
          </Box>
        </Stack>
        {/* Email Input */}
        <Box>
          <Typography className="fonts">Email Address</Typography>
          <TextField
            size="small"
            type="email"
            fullWidth
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            error={!!errors?.email}
          />
        </Box>
        {/* Job Input */}
        <Box>
          <Typography className="fonts">Current Job Role</Typography>

          <TextField
            size="small"
            select
            defaultValue="Product Manager"
            fullWidth
          >
            {" "}
            {jobStatus.map((jobs, index) => (
              <MenuItem key={index} value={jobs}>
                {jobs}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {/* Password Input */}
        <Box>
          <Typography className="fonts">Password</Typography>
          <TextField
            size="small"
            type="password"
            fullWidth
            {...register("password", { required: true })}
            error={!!errors?.email}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          className="SignUpButtons"
          sx={{ mt: "36px" }}
        >
          Next
        </Button>
      </Stack>
      {/* Or */}
      <Typography color="#888888" fontSize="24px" textAlign="center" my={1}>
        Or
      </Typography>
      {/* Link SignUp */}
      <Button size="small" variant="extended" className="ExternalSignUpButtons">
        <LinkedInIcon sx={{ marginRight: "10px" }} /> Sign up with LinkedIn
      </Button>
      {/* Terms & Conditions */}

      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        sx={{ fontSize: { lg: "16px", xs: "13px" } }}
        marginTop="28px"
        marginBottom={2}
      >
        <span
          style={{
            color: "#888888",
          }}
        >
          By signing up, you agree to our
        </span>
        <Button
          sx={{
            color: "#616161",
            textDecoration: "underline",
            textTransform: "none",
            padding: { lg: "8px 8px", xs: "0" },
          }}
        >
          Terms and Conditions
        </Button>
      </Stack>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#e3e3ed",
        }}
        open={open}
      >
        {open === false ? (
          <CircularProgress color="inherit" />
        ) : (
          <PersonalDetails />
        )}
      </Backdrop>
    </Stack>
  );
};

export default SignUp;
