const myData = require('./myData.js');
const Polygon = require('./Polygon.js');
const _ = require('underscore');
//node has http built into it
const http = require('http');

console.log("hello world");

const helloFns = () => {
    console.log("hello fns");
}

helloFns();

myData.getMessage();

const myPolygon = new Polygon(10, 15);
console.dir(myPolygon.height);

const myArray = [1, 2, 3,4, 5];

const found = _.contains(myArray, 3);
console.log(found);


//making a request / server
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    if(request.url === '/favicon.ico')
        {
            console.log('favicon request');
        }
    //mine type -> text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('request received');
    
    response.write(myData.getMessage());
    response.end();
};

http.createServer(onRequest).listen(port);
