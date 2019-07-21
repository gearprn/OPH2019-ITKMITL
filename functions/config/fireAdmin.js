const admin = require('firebase-admin');
require('custom-env').env()

admin.initializeApp({
    credential: admin.credential.cert(process.env.FIREBASE_CONFIG),
    databaseURL: "https://itkmitl-oph-2019.firebaseio.com"
});

module.exports = admin;