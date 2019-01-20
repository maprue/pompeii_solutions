
var extractedData;
var extractedRaw;
var extractedTransport;
var extractedStorage;
var extractedPackaging;
var extractedTotal;
var extractedRating;

function performSearch(message) {

    //let {PythonShell} = require('python-shell')
    //return new Promise((resolve, reject) => {


        //extractedRaw = 1;
        extractedTransport = 1;
        extractedStorage = 1;
        extractedPackaging = 1.5;

        const spawn = require("child_process").spawn;
        const pythonProcess = spawn('python',["py/search_fx.py", message]);


        // alert('searching for ' + message);

        //var execSync = require('exec-sync');

        // PythonShell.run('search_fx.py', { scriptPath: 'py' }, function (err) {
        //     console.log('The script work has been finished.'); // (*)
        //     if(err) {
        //       res.status(500).send({
        //         error: err,
        //       });
        //       console.log(err);
        //       return;
        //     }
        //     let obj = fs.readFileSync('main.js', 'utf8');
        //     console.log(obj); // (**)
        //     res.status(200).send({
        //         message : 'Success',
        //     });
        // });



        pythonProcess.stdout.on('data', (data) => {
        // Do something with the data returned from python script
            //alert(data);
            //alert(data)
            // alert('hi');

            // extractedData = JSON.parse(data)['1']['Name'];
            extractedData = JSON.parse(data)['1'];

            extractedName = JSON.parse(data)['1']['Name'];
            extractedRaw = JSON.parse(data)['1']['Raw'];
            extractedTransport = JSON.parse(data)['1']['Transport'];
            extractedStorage = JSON.parse(data)['1']['Storage'];
            extractedPackaging = JSON.parse(data)['1']['Packaging'];
            extractedTotal = JSON.parse(data)['1']['Total'];
            extractedRating = JSON.parse(data)['1']['Rating'];

            extractedRaw = 4;

            // alert(JSON.parse(data)['1']['Name']);
            //console.log(JSON.parse(data));
        });

        pythonProcess.stderr.on('data', (data) => {
        // Do something with the data returned from python script
            alert('error: ' + data);
        });

    //});
}



