const functions = require('firebase-functions');
require('custom-env').env();

const event = require('./controller/eventController.js');

exports.event = functions.https.onRequest(event);