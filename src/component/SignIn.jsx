import React from "react";
import { Stack, Typography, Button, Box, TextField } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
  return (
    <Stack className="SignBoxes">
      {" "}
      <Typography fontSize="40px" mt={2}>
        Sign in
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
          New to LeanPrep?
        </span>
        <Button
          sx={{
            color: "#4A51FA",
            fontSize: "24px",
            textDecoration: "underline",
            textTransform: "none",
          }}
        >
          Signup
        </Button>
      </Stack>
      {/* Form */}
      <Stack component="form" gap={3}>
        {/* Email Input */}
        <Box>
          <Typography className="fonts">Email Address</Typography>
          <TextField size="small" type="text" fullWidth />
        </Box>
        <Box>
          <Typography className="fonts">Password</Typography>
          <TextField size="small" type="password" fullWidth />
        </Box>
        <Button type="submit" variant="contained" className="SignUpButtons">
          Continue
        </Button>
      </Stack>
      <Typography color="#888888" fontSize="24px" textAlign="center" my={1}>
        Or
      </Typography>
      {/* Link SignUp */}
      <Button
        size="small"
        variant="extended"
        className="ExternalSignUpButtons"
        sx={{ mb: "10px" }}
      >
        <FacebookIcon sx={{ marginRight: "10px" }} className="ExtraSmall" />{" "}
        Continue with Facebook
      </Button>
      <Button
        size="small"
        variant="extended"
        className="ExternalSignUpButtons"
        sx={{ mb: "10px" }}
      >
        <GoogleIcon sx={{ marginRight: "10px" }} className="ExtraSmall" />{" "}
        Continue with Google
      </Button>
      <Button
        size="small"
        variant="extended"
        className="ExternalSignUpButtons"
        sx={{ mb: "10px" }}
      >
        <LinkedInIcon sx={{ marginRight: "10px" }} className="ExtraSmall" />{" "}
        Continue with LinkedIn
      </Button>
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
    </Stack>
  );
};

export default SignIn;
