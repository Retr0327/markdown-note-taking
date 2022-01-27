import React from "react";
import { Box, TextField, Paper, Typography, Grid, Button } from "@mui/material";

function DownloadButton() {
  return (
    <Box sx={{ width: "38%", marginLeft: "auto", marginRight: "auto" }}>
      <Paper elevation={20} sx={{ width: "100%", height: "10rem", mb: 5 }}>
        <Grid
          container
          direction="column"
          alignItems="start"
          width="100%"
          p="4%"
        >
          <Grid item xs={12} md={12}>
            <Typography variant="h5">儲存檔案</Typography>
          </Grid>

          <Grid item xs={12} md={12} mt={2} width={"100%"}>
            <TextField defaultValue="my-markdown" sx={{ width: "50%" }} />
            <Button variant="contained" sx={{ height: 55, ml: 1 }}>
              Save Markdown
            </Button>
            <Button variant="contained" sx={{ height: 55, ml: 1 }}>
              Save HTML
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default DownloadButton;
