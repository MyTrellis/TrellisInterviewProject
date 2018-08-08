const express = require('express');//need this to use express

// In-memory 'database' object. Page has to be refreshed to see changes here(bk note)
const db = {
  sensors: [
    {
      id: 1,
      name: 'North Sensor',
      description: 'The sensor in the north, check',
      type: 'will this show?'
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
//app.use is middleware. They have access to request object, which isn't being used here.
//response object
//function is executed everytime the app receives a request. No mount path here
app.use(function(req, res, next) {
  // Allow CORS
  // Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
  res.header('Access-Control-Allow-Origin', '*');//indicates whether the response can be shared with resources with the given origin.
  // For requests without credentials, the server may specify "*" as a wildcard, thereby allowing any origin to access the resource. Access will only be allowed for requests made with the crossorigin attribute set to "anonymous". Attempting to use the wildcard with credentials will result in an error.
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
  //next middleware function in the application's request-response cycle
});
//route handler. Handles GET requests to the root of the app. Intended for matching and handling a specific route when requested with the GET HTTP verb
app.get('/sensors', (req, res) => {
  // Return all sensors. Sends JSON response composed of a stringified version of the specified data
  res.json(db.sensors);
});

const PORT = 9000;
app.listen(PORT);
console.log('Express listening on port ' + PORT);
