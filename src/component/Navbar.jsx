import React from "react";
import { Button, Fab, Stack, Typography } from "@mui/material";
import VideoChatOutlinedIcon from "@mui/icons-material/VideoChatOutlined";

const Navbar = () => {
  const btns = ["About Us", "Pricing"];
  return (
    //    Navbar Stack
    <Stack
      sx={{
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
      }}
      justifyContent="space-around"
      alignItems="center"
    >
      {/* Company Logo */}
      <Typography fontSize="40px" fontWeight="bold" zIndex="11111">
        Lean<span style={{ color: "#000AFF" }}>Prep</span>
      </Typography>
      {/* Links Buttons */}
      <Stack
        sx={{
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
        gap={2}
      >
        {btns.map((item, index) => (
          <Button
            key={index}
            sx={{ color: "#000000", textTransform: "none", fontWeight: "500" }}
          >
            {item}
          </Button>
        ))}
        <Fab
          size="small"
          variant="extended"
          sx={{
            bgcolor: "white",
            paddingInline: "10px",
            boxShadow: "none",
            border: "1px solid #000AFF",
            color: "#000AFF",
            textTransform: "none",
          }}
        >
          Demo <VideoChatOutlinedIcon />
        </Fab>
      </Stack>
    </Stack>
  );
};

export default Navbar;
