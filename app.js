var restify = require('restify');

var router = require('./lib/router');

var server = restify.createServer({
  name: 'moon',
  version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/link/:port', router.getLink);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});