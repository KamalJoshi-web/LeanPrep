import { React, useState } from "react";
import { Button, Stack, Typography, Backdrop } from "@mui/material";
import Vector from "../assets/vector.png";
import Blob from "../assets/blob.png";
import CircularProgress from "@mui/material/CircularProgress";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Content = () => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const handleSignUp = () => {
    setSignUp(true);
  };
  const handleSignIn = () => {
    setSignIn(true);
  };

  return (
    // Content Stack
    <Stack minHeight="80vh" justifyContent="center" alignItems="center" gap={5}>
      <img src={Vector} alt="styling image" className="vector" />
      {/* Motivation Paragraph  */}
      <Typography
        fontSize="48px"
        fontWeight="700"
        color="#434343"
        textAlign="center"
      >
        Don't let nerves get the best of you – <br />
        <span style={{ color: "#000000" }}>practice makes perfect!</span>
      </Typography>
      {/* Greeting Paragraph */}
      <Typography
        fontSize="24px"
        color="#434343"
        textAlign="center"
        marginX="30px"
      >
        Welcome to{" "}
        <span style={{ color: "#000000", fontWeight: "500" }}>LeanPrep!</span>{" "}
        The ultimate destination for honing your interview skills. Whether
        you're a fresh graduate, career changer, or seasoned professional, we've
        got you covered. Our
        <span style={{ color: "#000000", fontWeight: "500" }}>
          {" "}
          comprehensive library
        </span>{" "}
        of mock interview questions and
        <span style={{ color: "#000000", fontWeight: "500" }}>
          {" "}
          expert tips
        </span>{" "}
        will help you
        <span style={{ color: "#000000", fontWeight: "500" }}>
          {" "}
          ace any job interview.
        </span>
      </Typography>
      {/* Joining Stack */}
      <Stack>
        <Button
          variant="contained"
          sx={{ bgcolor: "#000AFF", textTransform: "none", fontSize: "32px" }}
          onClick={handleSignUp}
        >
          Join our Program
        </Button>

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
              color: "black",
              fontSize: "24px",
              textDecoration: "underline",
              textTransform: "none",
            }}
            onClick={handleSignIn}
          >
            Login
          </Button>
        </Stack>
      </Stack>
      <img src={Blob} alt="styling image" className="blob" />
      {/* SignUp BackDrop */}
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#e3e3ed",
        }}
        open={signUp}
      >
        {signUp === false ? <CircularProgress color="inherit" /> : <SignUp />}
      </Backdrop>
      {/* SignIn BackDrop */}
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#e3e3ed",
        }}
        open={signIn}
      >
        {signIn === false ? <CircularProgress color="inherit" /> : <SignIn />}
      </Backdrop>
    </Stack>
  );
};

export default Content;
