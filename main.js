const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const shutdown = require('electron-shutdown-command')

let willQuitApp = false;
let win;
let reloj;

function createWindow(){
  win = new BrowserWindow({alwaysOnTop: true, fullscreen: true})
  reloj = new BrowserWindow({width:200, height:115, resizable: false, x: 0, y: 0, frame:false, show: false, alwaysOnTop: true, icon:'./clock-icon.png'})
  win.setMenu(null)
  win.loadURL('http://192.168.1.21:7766/block')
  //win.webContents.openDevTools()
  win.on('close', function(e){
    e.preventDefault()
  });
};

exports.controlar = function(id){
  reloj.show();
  //reloj = new BrowserWindow({width:1000, height:600, resizable: false, x: 0, y: 0, frame:false, show: true, alwaysOnTop: true, icon:'./clock-icon.png'})
  reloj.setMenu(null)
  reloj.loadURL('http://192.168.1.21:7766/reloj?id='+id)
  //reloj.webContents.openDevTools()
};

exports.hideReloj = function(){
  reloj.hide();
};

exports.hideBlockScreen = function(){
  win.hide();
};

exports.showBlockScreen = function(){
  win.show();
};

exports.shutdown = function(){
  shutdown.shutdown();
};

app.on('ready', createWindow);
