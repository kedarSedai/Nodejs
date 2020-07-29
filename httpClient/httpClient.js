const http = require('http');

var options = {  
    hostname: '127.0.0.1', 
    port: 80,  
    path: '/', 
    method: 'GET' 
}

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('Response: ' + chunk);
    });
    res.on('end', function(chunk) {
        console.log('Response ENDED');
    });
});
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});
req.end()