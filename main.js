const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const electron = require('electron')

let win

function createWindow() {
   //win = new BrowserWindow({width: 2600, height: 600})
   // win.loadURL(url.format ({
   //    pathname: path.join(__dirname, 'index.html'),
   //    protocol: 'file:',
   //    slashes: true
   // }))

   let displays = electron.screen.getAllDisplays()
   let externalDisplay = displays.find((display) => {
      return display.bounds.x !== 0 || display.bounds.y !== 0
   })

   if (externalDisplay) {
      win = new BrowserWindow({
         x: externalDisplay.bounds.x + 50,
         y: externalDisplay.bounds.y + 50
      })

      win2 = new BrowserWindow({width: 2600, height: 600})
      win2.loadURL(url.format ({
         pathname: path.join(__dirname, 'index.html'),
         protocol: 'file:',
         slashes: true
      }))

      win.loadURL(url.format ({
         pathname: path.join(__dirname, 'index.html'),
         protocol: 'file:',
         slashes: true
      }))
   }
}

app.on('ready', createWindow)