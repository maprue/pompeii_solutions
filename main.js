'use strict';

const electron = require('electron');
//var app = require('electron').app;
//var BrowserWindow = require('browser-window');
var {app, BrowserWindow, crashReporter} = electron;
var PythonShell;

var volcano1;
var volcano2;
var volcano3;
var volcano4;

crashReporter.start({
 productName: 'TaskApp',
 companyName: 'PompeiiSolutions',
 submitURL: 'http://localhost:3000/api/app-crashes',
 uploadToServer: true
});

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {

    // Window size
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // Initial loading file
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    // mainWindow.onload = function() {
    //     loadImages();
    //     console.log('will load images');
    //   };

    PythonShell = require('python-shell');

    //img_tmp = document.getElementById


});

