
function performSearch(message) {

    let {PythonShell} = require('python-shell')

    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["py/search_fx.py", message]);

    pythonProcess.stdout.on('data', (data) => {
    // Do something with the data returned from python script
        //alert(data);
        //alert(data)
        alert(JSON.parse(data)['1']['Name']);
        //console.log(JSON.parse(data));
    });

    pythonProcess.stderr.on('data', (data) => {
    // Do something with the data returned from python script
        alert('error: ' + data);
    });

    console.log('joijoijioj');

    //alert(message);

}

