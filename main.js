const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow, Menu, ipcMain } = electron

let mainWindow

app.on('ready', function() {
    // Criando nova janela
    mainWindow = new BrowserWindow({})

    // carregando url
    /*mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'telaPrincipal.html'),
        protocol: 'file:',
        slashes: true
    }))*/
    mainWindow.loadFile('./telaPrincipal.html')

    mainWindow.on('closed', function() {
        app.quit()
    })
    

    // Construindo menu do template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    // Inserindo menu
    //Menu.setApplicationMenu(mainMenu)
})

// fechar
ipcMain.on('but:close', function() {
    console.log('bbbbbbbb')
    app.quit()
})


// Criando menu template
const mainMenuTemplate = [
    {
        label: 'Filesss',
        submenu: [
            {
                label: 'a'
            }
        ]
    }
]