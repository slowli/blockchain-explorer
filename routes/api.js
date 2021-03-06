var express = require('express');
var request = require('request');
var router = express.Router();
var endpoint = 'http://127.0.0.1:8200';

router.get('/*', function(req, res, next) {
    var query = req.params[0];

    request.get({
        url: endpoint + '/api/' + query,
        qs: req.query
    }, function(err, response, body) {
        if (err) {
            return next(err);
        }
        try {
            res.json(JSON.parse(body));
        } catch (e) {
            res.json({});
        }
    });
});

router.post('/*', function(req, res, next) {
    var query = req.params[0];

    request.post({
            url: endpoint + '/api/' + query,
            json: req.body
        },
        function(err, response, body) {
            if (err) {
                return next(err);
            }
            res.json(body);
        });
});

module.exports = router;