import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper({ children }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 5,
            width: "100vh",
            height: "90vh",
          },
        }}
      >
        <Paper elevation={3}>{children}</Paper>
      </Box>
    </>
  );
}
