import React, { useState, useMemo } from "react";
import { saveHTML, saveMarkdown } from "../containers/Helper";
import {
  Box,
  TextField,
  Paper,
  Typography,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";

function DownloadButton({ markdownText, htmlContent }) {
  const [fileName, setFileName] = useState("untitled-note");
  const mediaQuery = useMediaQuery("(max-width:600px)");

  const customWidth = useMemo(
    () => (mediaQuery ? { width: "50%" } : { width: "100%" }),
    [mediaQuery]
  );

  const onFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  return (
    <Box sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
      <Paper
        elevation={20}
        sx={{
          width: "50%",
          height: "40%",
          mb: 5,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
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

          <Grid item container xs={12} md={12} mt={2} width={"100%"} gap={1} >
            <Grid item xs={12} md={4}>
              <TextField
                defaultValue={fileName}
                sx={{ width: "100%" }}
                onChange={onFileNameChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                sx={{ height: 55,  width: "100%"  }}
                onClick={saveMarkdown(markdownText, fileName)}
              >
                Save Markdown
              </Button>
            </Grid>

            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                sx={{ height: 55,  width: "100%"  }}
                onClick={saveHTML(htmlContent, fileName)}
              >
                Save HTML
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default DownloadButton;
