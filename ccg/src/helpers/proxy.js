// let httpProxy = require("http-proxy");
// let http = require("http");

// //
// // Create your proxy server and set the target in the options.
// //
// let proxy = httpProxy
//   .createProxyServer({ target: "http://localhost:9000" })
//   .listen(8000);

// //
// // Create your target server
// //
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write(
//       "request successfully proxied!" +
//         "\n" +
//         JSON.stringify(req.headers, true, 2)
//     );
//     res.end();
//   })
//   .listen(9000);

var Proxy = require("http-mitm-proxy");
var proxy = Proxy();

proxy.onError(function (ctx, err) {
  console.error("proxy error:", err);
});

proxy.onRequest(function (ctx, callback) {
  ctx.use(Proxy.gunzip);

  ctx.onResponseData(function (ctx, chunk, callback) {
    chunk = new Buffer(
      chunk.toString().replace(/<h3.*?<\/h3>/g, "<h3>Pwned!</h3>")
    );
    return callback(null, chunk);
  });

  return callback();
});

proxy.listen({ port: 8081 });
