var express = require('express');
var bodyParser = require('body-parser');
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var argv = require('minimist')(process.argv.slice(2));
var fs =require("fs");

var {getPackageName} = require('./util/fetchPackageName');
var {getProto} = require('./util/fetchProto');
var {getServiceName} = require('./util/fetchServiceName');

var app = express();
app.use(bodyParser.json());

var PROTO_PATH = __dirname + argv.f;
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var buffer = fs.readFileSync(PROTO_PATH).toString();
var package = getPackageName(buffer);
var proto = getProto(grpc.loadPackageDefinition(packageDefinition), package);

app.post('/:function_name', async(req, res) => {
  var host = argv.h || "localhost:6565";
  var client = new proto[`${getServiceName(buffer)}`](host, grpc.credentials.createInsecure());

  var metadata = new grpc.Metadata();
  for(var item in req.headers) {
    metadata.add(item, req.headers[item]);
  }

  client[`${req.params.function_name}`](req.body, metadata, function(err, response) {
    if (err) {
      console.error('Failed:', err);
      return res.status(400).send(err);
    }
    console.log('Sucess:', response);
    return res.send(response);
  });
});

const port = argv.p || 3000;
app.listen(port, () => {
  console.log(`Grpc service test server started on port ${port}`);
});
