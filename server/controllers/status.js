module.exports = function(app) {

	app.get('/api/v1/status', function(req, res, next) {

		res.status(200).json({
			status: 'OK',
		});
	});
};
