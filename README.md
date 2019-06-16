# grpc-test
Test your Grpc service as easy as a rest endpoint with your favorite API tool like Postman or Swagger. 

**Install the client, select your protobuf files and start making requests! 
No extra steps or configuration needed.**

## Installation:

```
git clone https://github.com/rishabhcha/grpc-test.git
cd grpc-test
npm install
```

## Run:

```
node index.js -f <proto-file-path>
```

It assumes grpc service host is `localhost:6565`
You can manually specify host with flag `-h`
```
node index.js -f <proto-file-path> -h <host>
```
By default **grpc-test** runs at port `3000`. If that port is occupied by some other service you can specify the port at which you want your test tool to run by specifying flag `-p`
```
node index.js -f <proto-file-path> -h <host> -p <port>
```

## Example:

```
node index.js -f /../projects/service1/src/main/proto/hello-example.proto -h localhost:7575 -p 3001
```

## Usage:

Let see how to use with an example.

My Proto file:
```syntax = "proto3";
option java_multiple_files = true;
package com.gonuclei.grpc;
message HelloRequest {
    string firstName = 1;
    string lastName = 2;
}
message HelloResponse {
    string greeting = 1;
}
service HelloService {
    rpc hello(HelloRequest) returns (HelloResponse);
}
```

Run **grpc-test**

Now simply make a rest request to **grpc-test** from Curl or Postman or from wherever you want like:

```
curl -X POST \
  http://localhost:3000/hello \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOV1U3WExndnl0dGNYeC91bytuSlBUUmIzVTh2ZXlGNjFuV0NJaVAxSU84UG1FdzRDaUdqenpWY0JvSGhnSXJhTVk5U1daSDlleEZ5bmRSMTh4cFJtWUhIWTZaSHpjMW0ybGM3V050aVRwcEU4clJKYVc0UVpFSFNhYldjZHdnWm1Ed0JYK3JLVGU1RGhUS25YTGxCYTFuTDdTVWRlbkRPRWtpbU8yWkVhZXFST09JNkpQQVpteWdNOHY0TmhMSVk3MFNqMUt4STBoNS9NeUhQd0x0ZVFReHBpWWdwN0MyaG5pb0hsUkhGU2g4NjVoVmhHSUNrUXZhMHFxYnYrSFArOG5RdFFhdGdnUXp0Ukc1Y2pRNEZFSkdvM0cvTkw0TnVUaU8vb1FHNlMrcnRPdmR6Ym5YblhibXhucEVvdGhHOSIsIlJvbGUiOiJST0xFX1VTRVIifQ.OFVGla-TPVF0qxvwJaJ9VJvHGuAT7GElD7MLaBRUm9qAU7E4xlKWgyzNSIgBP6Slo0JPLxJV2Yh7245UkHNbAQ' \
  -d '{
	"firstName": "Rishabh",
	"lastName": "Chandel"
}'
```

Here `/hello` at end of endpoint specifies the rpc you want to hit.

**And yes it will take care of headers and auth tokens as well!!**




