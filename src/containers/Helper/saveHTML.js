import FileSaver from "file-saver";

function saveHTML(htmlContent, fileName) {
  let blobFile = new Blob([htmlContent], {
    type: "text/html",
  });

  FileSaver.saveAs(blobFile, fileName);
}

export default saveHTML;
