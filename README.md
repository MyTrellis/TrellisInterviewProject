# Trellis Internship Interview Project
### This repo contains the following:
- A react application that displays a list of sensors.  The react application can be found in the `frontend` folder.
- An express server, which contains one route that serves up the list of sensors.  It can be found in the `backend` folder.
  - The express server serves as an intermediary between the client and a local [Firebase Realtime Database](https://firebase.google.com/docs/database/).

## Project Goals
- Add the ability to see a detailed view of an individual sensor.
- The data of this view should come from a different express route, which should return just the information of the requested sensor.
- On the detailed view the user should be able to add, remove, and view "notes" about the sensor.
  - These notes should be stored in the database

## Running
### `frontend`
`npm install ` then `npm start` will start a build of the react application that will livereload.
It was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

### `backend`
`npm install ` then `npm start` will start both the express and firebase server (using [concurrently](https://www.npmjs.com/package/concurrently)).  The express server will restart whenever it detects changes (using [nodemon](https://www.npmjs.com/package/nodemon)).  If you need to reset the firebase database, restart the script. 

## Backend notes
You can see the data initially stored in the database at `backend/lib/fbServer.js`.  The database is stored in memory, so any data stored will be lost when you stop the process.

The library used to interact with Firebase is the [Firebase Node.js Admin Database SDK](https://firebase.google.com/docs/database/admin/start).  Documentation is [here](https://firebase.google.com/docs/reference/admin/node/admin.database).

## Frontend notes
Don't worry about supporting old browsers, but DO worry about making it responsive.  The UI should be usable on mobile.  

## General notes
Feel free to add dependencies if you feel they are useful.

Good luck!
