
function performSearch(message) {

    let {PythonShell} = require('python-shell')

    //import {PythonShell} from 'python-shell';
    //let pyshell = new PythonShell('hello.py');
//     PythonShell.run('hello.py', null, function (err, results) {
//       if (err) throw err;
//       console.log('finished');
//       console.log('results', results);
//     });

//     var python = require('child_process').spawn('python', ['./hello.py']);
//     python.stdout.on('data',function(data){
//         console.log("data: ",data.toString('utf8'));
//     });

    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["search_fx.py", message]);

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

