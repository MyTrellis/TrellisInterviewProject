const express = require('express');
const admin = require('firebase-admin');

// Initialize connection to firebase
admin.initializeApp({
  credential: {
    getAccessToken: () => ({
      expires_in: 0,
      access_token: '',
    }),
  },
  databaseURL: 'ws://localhost:9100',
});

const db = admin.database();

// Create express app
const app = express();

app.use(function(req, res, next) {
  // Allow CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/sensors', (req, res) => {
  // Return all sensors
  db.ref('sensors')
    .once('value')
    .then(snap => snap.val())
    .then(sensors => Object.values(sensors))
    .then(sensorsArr => res.json(sensorsArr))
    .catch(err => res.status(500).send('Error getting sensors'));
});

const PORT = 9000;
app.listen(PORT);
console.log('Express listening on port ' + PORT);
