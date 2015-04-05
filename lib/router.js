var router = {};
var child_process = require('child_process');

router.getLink = function (req, res, next) {
	child_process.execFile(process.cwd() + "/lib/getlink.sh", [req.params.port], function (err, out) {
		if(err) {
			res.writeHead(404);
			return res.end("error");
		}
		res.send(parseInt(out).toString());
		next();
	});
}

module.exports = router;
