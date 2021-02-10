const { app, BrowserWindow, Menu } = require('electron')


// Set enviroment
process.env.NODE_ENV = 'development'

//Check to see enivro
const isDev = process.env.NODE_ENV !== 'production' ? true : false
// Mac check
const isMac = process.platform === 'darwin' ? true : false

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
      title: 'ImageShrinker',
      width: 500,
      height: 600,
      icon: `${__dirname}/assets/icons/Icon_256x256.png`,
      resizable: isDev ? true : false,
    //   backgroundColor: 'white',
    //   webPreferences: {
    //     nodeIntegration: true,
      })

      mainWindow.loadFile('./app/index.html')
    }

    app.on('ready', () => {
      createMainWindow()
    
       const mainMenu = Menu.buildFromTemplate(menu)
       Menu.setApplicationMenu(mainMenu)
    
      mainWindow.on('closed', () => (mainWindow = null))
    })

const menu = [
  ...(isMac ? [{ role: 'appmenu' }] : []),
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        click: () => app.quit(),
      },
    ],

  },
]

    app.on('window-all-closed', () => {
      if (!isMac) {
        app.quit()
      }
    })
    
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
      }
    })

    app.allowRendererProcessReuse = true