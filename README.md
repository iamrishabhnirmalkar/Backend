## Day 00

## Backend

In the backend, we have two major components:

1. Programming Language: We choose a programming language with its associated framework.
2. Database: We select a database management system (DBMS) and may use Object-Relational Mapping (ORM) or Object-Document Mapping (ODM) tools.

The flow of data is as follows: Frontend communicates with the backend via APIs, which then interacts with the database.

Backend operations revolve around three primary scenarios: handling data, dealing with files, and integrating third-party APIs.

File Structure:

- package.json: Configuration file containing metadata and dependencies for the project.
- .env: Environment file for storing sensitive or configurable information.
- index.js: Entry point file for the backend application.
- App File (e.g., app.js): Contains application-specific configurations such as cookie settings and general configurations.
- Constants (e.g., constants.js): File containing constants like database names and other fixed values.

Directory Structure:

- DB: Folder for database-related configurations.
- Models: Contains data models representing database schema.
- Controllers: Holds the business logic and functionality of the application.
- Routers: Contains route definitions for the API endpoints.
- Middlewares: Contains middleware functions for request processing.
- Utils: Houses utility functions, such as sending emails and handling file uploads.
- More (Optional): Additional folders for dependencies or other project-specific needs.

## Day 01

When a user requests data from the website, Express{ a Node.js framework} handles the incoming requests and sends responses accordingly.

In our scenario, when the user's browser makes a request, Express listens for the request and responds based on the specified routes:

- For the / (home) route, Express responds to the user with the homepage.
- For the /login route, Express directs the user to the login page.

The request type specified is a GET request, which typically retrieves data from the server without making any changes to the server's data.

## Day 03

# Connect Forntend and Backend

To connect the frontend and backend of your application, follow these steps:

1. Initialize npm in the backend folder and install Express:
   `npm init -y`
   `npm install express`

2. Enable ES Modules in Node.js:

Ensure that you have "type": "module" set in your package.json file to use ES Modules.
{
"type": "module",
"dependencies": {
"express": "^4.17.1"
}
}

3. Handle CORS Policy:

   CORS (Cross-Origin Resource Sharing) policy restricts requests made from one domain to another. To allow frontend and backend communication, install the cors package:
   `npm install cors`

4. Define API Standards:
   Follow standard conventions for defining APIs. For example, use /api/jokes to fetch jokes from the backend.

5. Setting up Proxy:

- Vite.js: Update vite.config.js to proxy requests from the frontend to the backend during development.

  // vite.config.js
  import { defineConfig } from 'vite';

export default defineConfig({
server: {
proxy: {
'/api': 'http://localhost:3000/'
}
}
});

Create React App (CRA): Set up proxy in package.json.

// package.json
{
"proxy": "http://localhost:3000"
}

With this configuration, requests made to /api in your frontend code will be forwarded to http://localhost:3000/api (your backend) during development.

6. Connect Frontend and Backend:

In your frontend code, make requests to the backend API endpoints using relative URLs (e.g., /api/jokes). The proxy configurations will ensure that these requests are forwarded to the backend server during development.
