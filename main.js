'use strict';

const electron = require('electron');
//var app = require('electron').app;
//var BrowserWindow = require('browser-window');
var {app, BrowserWindow, crashReporter} = electron;

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

//     var python = require('child_process').spawn('python', ['./hello.py']);
//     python.stdout.on('data',function(data){
//         console.log("data: ",data.toString('utf8'));
//     });
// 
//     var {PythonShell} = require('python-shell');
// 
//     PythonShell.run('hello.py', function(err, results) {
//         if (err)
//             throw err;
//         console.log('hello.py finished.');
//         console.log('results', results);
//     }, function(err) { if(err) throw(err); });
// 
    //import {PythonShell} from 'python-shell';
    let {PythonShell} = require('python-shell')

    PythonShell.run('hello.py', null, function (err, results) {
      if (err) throw err;
      console.log('finished');
      console.log('results', results);
    });

});

