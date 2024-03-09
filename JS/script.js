let DropZone = document.querySelector(".dropBox");
let FileInput = document.getElementById("InputFile");
let BrowserBtn = document.querySelector(".browserbtn");
DropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (!DropZone.classList.contains("dragged")) {
    DropZone.classList.add("dragged");
  }
});
DropZone.addEventListener("dragleave", () => {
  DropZone.classList.remove("dragged");
});
DropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  DropZone.classList.remove("dragged");
  let files = e.dataTransfer.files;
  if (files.length) {
    FileInput.files = files;
  }
  console.log(files);
});
BrowserBtn.addEventListener("click", () => {
  FileInput.click();
});
