const { app, BrowserWindow } = require("electron");

// this prevents mainWindow from being garbage collected
// toplevel scope remains alive until applications quits
let mainWindow = null;

app.on("ready", () => {
  mainWindow = new BrowserWindow({ show: false });

  mainWindow.loadFile(`${__dirname}/index.html`);

  mainWindow.once("ready-to-show", () => mainWindow.show());
});

console.log("Starting up...");
