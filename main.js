const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
var $ = require('jQuery')

// Mantén una referencia global del objeto ventana, si no lo haces, la ventana se
// cerrará automáticamente cuando el objeto de JavaScript sea basura colleccionada.
let willQuitApp = false;
let win;
let reloj;

function createWindow(){
  //win = new BrowserWindow({alwaysOnTop: true, fullscreen: true})
  win = new BrowserWindow()
  //win.setFullScreen(true);
  win.setMenu(null)
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  reloj = new BrowserWindow({width:170, height:105, resizable: false, x: 0, y: 0, frame:false, show: false})
  reloj.setMenu(null)
  reloj.loadURL(url.format({
    pathname: path.join(__dirname, 'reloj.html'),
    protocol: 'file',
    slashes: true
  }))
  // win.loadURL('http://localhost:8080/block')
  win.webContents.openDevTools()

  win.on('close', function(e){
    e.preventDefault()
  });
};

exports.openWindow = function(){
  reloj.show();
  //reloj.webContents.openDevTools()
};

exports.closeWindow = function(){
  reloj.hide();
};

exports.hideBlockScreen = function(){
  win.hide();
};

exports.showBlockScreen = function(){
  win.show();
};

app.on('ready', createWindow);
