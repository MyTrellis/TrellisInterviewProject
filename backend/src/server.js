const express = require('express');

// In-memory 'database' object
const db = {
  sensors: [
    {
      id: 1,
      name: 'North Sensor',
      description: 'The sensor in the north'
    },
    {
      id: 2,
      name: 'South Sensor',
      description: 'The south field sensor'
    },
    {
      id: 3,
      name: 'East Sensor',
      description: 'The sensor on the east side'
    },
    {
      id: 4,
      name: 'West Sensor',
      description: 'The western most sensor'
    }
  ]
};

// Create express app
const app = express();

app.use(function(req, res, next) {
  // Allow CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/sensors', (req, res) => {
  // Return all sensors
  res.json(db.sensors);
});

const PORT = 9000;
app.listen(PORT);
console.log('Express listening on port ' + PORT);
