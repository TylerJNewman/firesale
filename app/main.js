const { app, BrowserWindow } = require("electron");

// this prevents mainWindow from being garbage collected
// toplevel scope remains alive until applications quits
let mainWindow = null;

app.on("ready", () => {
  mainWindow = new BrowserWindow();

  mainWindow.loadFile(`${__dirname}/index.html`);
});

console.log("Starting up...");
