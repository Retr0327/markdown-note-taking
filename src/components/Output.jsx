import React from "react";
import { Typography, Box, Paper, Grid } from "@mui/material";

function Output({ title, htmlContent }) {
  return (
    <Box sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }} mt={7}>
      <Box mt={5} mb={10} width={"100%"}>
        <Paper elevation={20} sx={{ width: "100%", height: "40rem", mb: 5 }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            width="100%"
            p="5%"
          >
            <Grid item xs={12} md={12}>
              <Typography variant="h4">{title}</Typography>
            </Grid>

            <Grid item xs={12} md={12} width={"100%"} mt={5}>
              <Box
                component="div"
                sx={{
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  height: "50.8vh",
                  paddingLeft: "2%",
                }}
              >
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: htmlContent,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default Output;
