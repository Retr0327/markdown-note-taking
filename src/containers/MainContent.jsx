import React, { useState } from "react";
import { Grid } from "@mui/material";
import MarkdownIt from "markdown-it/lib";
import { Output, MarkdownInput, DownloadButton } from "../components/index";

function MainContent() {
  const [markdownText, setMarkDownText] = useState("");
  const [HTMLContent, setHTMLContent] = useState("");

  const handleTextInput = (event) => {
    setMarkDownText(event.target.value);
    let markdown = new MarkdownIt();
    let renderedHTML = markdown.render(event.target.value);
    setHTMLContent(renderedHTML);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={4} md={6}>
        <MarkdownInput
          title="Markdown"
          value={markdownText}
          handleTextInput={handleTextInput}
        />
      </Grid>

      <Grid item xs={12} sm={8} md={6}>
        <Output title="Output" htmlContent={HTMLContent} />
      </Grid>
      
      <Grid item xs={12} md={12}>
        <DownloadButton markdownText={markdownText} htmlContent={HTMLContent} />
      </Grid>
    </Grid>
  );
}

export default MainContent;
