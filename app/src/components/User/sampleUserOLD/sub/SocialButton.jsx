import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SocialButton = ({ title, img }) => {
  // Customize Material UI Icons
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            border: "1px solid #dbdbdb",
            outline: "none",
            "&:hover": {
              backgroundColor: "#ebebeb",
              border: "1px solid #dadada",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        style={{
          justifyContent: "start",
          padding: "15px 0 15px 20px",
          marginBottom: "8px",

          color: "#2d333a",
        }}
        size="large"
        startIcon={<img src={img} alt={title} className="w-[20px]" />}
        fullWidth
      >
        Continue with {title}
      </Button>
    </ThemeProvider>
  );
};

export default SocialButton;
