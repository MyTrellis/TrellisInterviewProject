# Trellis Internship Interview Project
Trellis is a growing AgTech/IoT startup where we use wireless sensors to help users make better business decisions. A common feature in our applications is to display a list of sensors that shows a high level summary, but let users click on an individual sensor to view more information. This project is a small example of this typical use case. We want to understand your ability to read/understand an existing codebase, make design and architecture decisions, and develop a full stack application.

### This repo contains the following:
- A react application that displays a list of sensors.  The react application can be found in the `frontend` folder.
- An express server, which contains one route that serves up the list of sensors.  It can be found in the `backend` folder.

## Project Goals
- Add the ability to see a detailed view of an individual sensor.
- The data for this view should come from a different express route, which should return just the information of the requested sensor.
- On the detailed view the user should be able to view, add, and remove "notes" about the sensor.
  - The notes should be stored on the server in the in-memory database object.

## Running
### `frontend`
`npm install ` then `npm start` will start a build of the react application that will livereload.
It was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

### `backend`
`npm install ` then `npm start` will start the express server.  The express server will restart whenever it detects changes (using [nodemon](https://www.npmjs.com/package/nodemon)).

## Notes
- Don't worry about supporting old browsers, but DO worry about making it responsive.  The UI should be usable on small screens.  
- Feel free to add dependencies if you feel they are useful.

Good luck!
