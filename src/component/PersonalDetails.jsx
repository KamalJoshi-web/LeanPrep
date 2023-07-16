import { React, useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
} from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const PersonalDetails = () => {
  const laguages = ["Select", "Hindi", "English", "Japanese", "Korean"];
  const industry = ["Select", "Design", "Managment", "Development"];
  const education = ["Select", "High School", "Graduate", "Post Graduate"];

  const [open, setOpen] = useState(false);
  const handleSnacker = (e) => {
    setOpen(true);
    e.preventDefault();
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <Stack className="SignBoxes PersonalBox">
      <Typography fontSize="40px" mt={2} className=" HeadExtraSmall">
        Personal Details
      </Typography>
      <Typography fontSize="16px" color="#616161">
        We need a few more details to complete the sign up process
      </Typography>
      {/* Form For Personal Details */}
      <Stack component="form" gap={3} onSubmit={handleSnacker}>
        <Box>
          <Typography className="fonts">Language Preferences </Typography>
          <TextField size="small" select defaultValue="Select" fullWidth>
            {" "}
            {laguages.map((laguages, index) => (
              <MenuItem key={index} value={laguages}>
                {laguages}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <Typography className="fonts">Birth Date</Typography>
          <TextField
            type="number"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarMonthOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box>
          <Typography className="fonts">Target Job/Industry</Typography>
          <TextField size="small" select defaultValue="Select" fullWidth>
            {" "}
            {industry.map((industry, index) => (
              <MenuItem key={index} value={industry}>
                {industry}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <Typography className="fonts">Education level</Typography>
          <TextField size="small" select defaultValue="Select" fullWidth>
            {" "}
            {education.map((education, index) => (
              <MenuItem key={index} value={education}>
                {education}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <Typography className="fonts">Preferred Interview mode </Typography>
          <RadioGroup
            defaultValue="Interviewee"
            color="gray"
            row
            sx={{ color: "#616161" }}
          >
            <FormControlLabel
              value="Interviewee"
              control={<Radio />}
              label="Interviewee"
            />
            <FormControlLabel
              value="Interviewer"
              control={<Radio />}
              label="Interviewer"
            />
            <FormControlLabel
              value="Hybrid"
              control={<Radio />}
              label="Hybrid mode"
            />
          </RadioGroup>
        </Box>
        <Button
          type="submit"
          variant="contained"
          className="SignUpButtons"
          sx={{ mt: "36px" }}
        >
          Sign up
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
      <Dialog onClose={handleClose} open={open}>
        {" "}
        <DialogTitle>Thanks For Submitting</DialogTitle>
      </Dialog>
    </Stack>
  );
};

export default PersonalDetails;
