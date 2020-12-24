const fs = require("fs");

const { app, BrowserWindow, dialog } = require("electron");

// this prevents mainWindow from being garbage collected
// toplevel scope remains alive until applications quits
let mainWindow = null;

app.on("ready", () => {
  mainWindow = new BrowserWindow({ show: false });

  mainWindow.loadFile(`${__dirname}/index.html`);

  getFileFromUser();

  mainWindow.once("ready-to-show", () => mainWindow.show());
});

const getFileFromUser = () => {
  const files = dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [
      { name: "Text Files", extensions: ["txt", "text"] },
      {
        name: "Markdown Files",
        extensions: ["md", "mdown", "markdown", "marcdown"],
      },
    ],
  });

  if (!files) return;

  const [file] = files;
  const content = fs.readFileSync(file);

  console.log(content);
};
