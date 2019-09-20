var fs = require('fs');
var stream;

stream = fs.createReadStream('./test.txt');

stream.on('data', function(data){
    let chunk = data.toString();
    console.log(chunk)
});
