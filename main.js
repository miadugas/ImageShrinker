const { app, BrowserWindow } = require('electron')

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
      title: 'ImageShrinker',
      width: 500,
      height: 600,
      icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    //   resizable: isDev ? true : false,
    //   backgroundColor: 'white',
    //   webPreferences: {
    //     nodeIntegration: true,
      })

      mainWindow.loadFile('./app/index.html')
    }

    app.on('ready', createMainWindow)

