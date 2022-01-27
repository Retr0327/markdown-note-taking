import FileSaver from "file-saver";

function saveMarkdown(markdownContent, fileName) {
  let blobFile = new Blob([markdownContent], {
    type: "text",
  });

  FileSaver.saveAs(blobFile, fileName);
}

export default saveMarkdown;
