

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    })

    win.loadFile('./src/index.html')
}

app.whenReady().then(createWindow)






// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow()
//     }
// })

