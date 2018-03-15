/*
  This file starts up a local Firebase server, running on port 9100.
  The DB is populated with some initial data.
*/

const FirebaseServer = require('firebase-server');

const fbServerPort = 9100;
const fbServer = new FirebaseServer(fbServerPort, `localhost:${fbServerPort}`,
/* This object is the initial state of the database */
{
  sensors: {
    '-L7ekcwFENwqFCK1EDwi': {
      id: 1,
      name: 'North Sensor',
      description: 'The sensor in the north'
    },
    '-L7ekg6sDqslDLE5GL_P': {
      id: 2,
      name: 'South Sensor',
      description: 'The south field sensor'
    },
    '-L7ekgGFInKics3dN8LM': {
      id: 3,
      name: 'East Sensor',
      description: 'The sensor on the east side'
    },
    '-L7ekgO-lDTAeT9G8dPi': {
      id: 4,
      name: 'West Sensor',
      description: 'The western most sensor',
    },
  }
});
console.log('Firebase server running on port ' + fbServerPort);
