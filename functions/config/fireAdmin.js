const admin = require('firebase-admin');
require('custom-env').env()

FIREBASE_CONFIG = {
    "type": "service_account",
    "project_id": "itkmitl-oph-2019",
    "private_key_id": "2972ee92585fb2512dee71b74db1a644d65ee99d",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCmdaubuu5F8ZrK\n0+Ou2mtffndqqN8ql0sXzaZVwu5aXaRNVOwRj1cvUQQDXYIyCzztonJoYBip8IsK\n1gTaaFarfo9TB85rMSolrBCN16J8wZBYr1blM3cPuwgboYG64IUeFCohn12CXMtQ\ne8ZTFXZ4S79reFAY1xaWwShk9E/hLodkVdb+eLhs28guQQOXS7f2GtDYL8UGuuUh\nqGFA4cWaEJln6US7Lw1clq7N3fZbXRMN73nFQCOoOticfSv/RBcGfq9jBpabWS2g\nPUIiVSynqFl9Q5Pl20rQiCdNRqaBMb8MuwDq8vUuNheaeIVSQEZeXR1VpZZxycpw\n8MXpW5L/AgMBAAECggEAMvqgpt318TfQJ0QDW96KucE6g1Dan+mb1ttlkKhVZRl+\noyxZ6/rRQa13JCy0He1xKHnyveKISyte+d+XtufzeywUauJeJlf1R3pNy5L5sWl6\ncp6oZyN+2DN4hTXOTFRMkGyuhoOPGMigf7KYh4NwN+FC63/6T9E3ms3nOBvWhujB\nkOicWMXp9klH3inSOwKf1KbnEMCQS+soteQuwErW2I0BjF2m5vpgWhJ/o0DLEecJ\nOIuAvJ28uAQDTpdS2o9LWXrZ/jE+EnWC5IgRu+yWpA94aFfy3nARDzNgP8uq+sGn\nEKks1P7/yOpTiLFb8DaBNzGOTPgltFx2lpdJozefCQKBgQDUm0oPzIE20aWLVBIW\nGJuMvwM/qALC4zf6cwVL+B+ghKq+lmCCn8+FNBw+mciCYpzbVwCD3L0Rib3st9hd\nnvpAzhHmIZVGdBTWteSqyeZpIBpUOuFDEMsYaIaF8XXjOgYkGT5EDa7Vj7jddW76\nhDk6rOymUDJC//pyWCbPzVQljQKBgQDIbzMSd/lidOtJ++Xjn/eSXzJA7ViG3vYy\n2QW4TxpKfPsYsxyU/4nv5jgrIIZ7Mdo1zoU7rNBY7HemTvWGbaDC6aLvyX6GC79h\nO8KKkLcTarPBe6x4D5UvHLWu1pSqWZE8txp00s80KwTufwXv9IdDb2KyP10s16D0\nsteOE1b5uwKBgGU33UWyRh40J00y5D1yz7NtSP2oXlAsXv00f2QQp/YC00tTSnVF\n4kV3bq77BfPVQPpH7G3azISqACrPyAmiY2Aw+2KFwIy/PSCPjmMlJjYMW5yYP6Bv\nQVHIiasBLu/UMxJClltN7FuuRgPhIcnQ43Ik27G+Yn91YOXJRAkQpywNAoGAVVPh\nri8dH+kecbSnPaxQPSQBxNpGIcSxkxwI71ndm3BxhSZbOKNBGbwslU+XcMLcXqO4\n3JrJZ9Hjbg2XQM9S7SeBkgt5rZ86ri4+t7a7+awnMmtwFPytSg0y22fGim7vAaYB\nwVItm8vkoZO591lmbDLzFWccR4bUotewJG/fSxkCgYBzmIIvZJCj638AWf8RtfsI\nN3fA7PAOG/SSmph0tUMHg4biieiEZ9XdmyWjrDDddGfQkAcy51vxRSTBwTNm/LT8\n0hdH1IomFopw/V0xramVx4rncsMzkYuuYJQUTMD5Ba65WaTdGeSnSdA8Ktz7rEEh\nlGE4pltRKnlVshjZlzQkNg==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-vitgk@itkmitl-oph-2019.iam.gserviceaccount.com",
    "client_id": "107882911366107277931",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vitgk%40itkmitl-oph-2019.iam.gserviceaccount.com"
};

admin.initializeApp({
    credential: admin.credential.cert(FIREBASE_CONFIG),
    databaseURL: "https://itkmitl-oph-2019.firebaseio.com"
});

module.exports = admin;