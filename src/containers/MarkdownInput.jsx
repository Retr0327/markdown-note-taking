import React from "react";
import { Typography, Box, Paper, Grid, TextField } from "@mui/material";

function MarkdownInput({ title, markdownText, handleTextInput }) {
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
              <TextField
                multiline
                rows={20}
                fullWidth
                value={markdownText}
                onChange={handleTextInput}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default MarkdownInput;
