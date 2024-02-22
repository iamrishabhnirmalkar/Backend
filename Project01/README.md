## Project01

## File structure

- public
- src
  - controller
  - db
  - middlewares
  - models
  - utils
  - app.js
  - constants.js
  - index.js
- .env
- .prettierignore
- .prettierrc
- package-lock.json
- package.json
- README.md

# DataBase Connection

write the data base url in env file and port number

install npm .env express mongoose

1.  mongooose

    - 1. This is first approach to connect database and express
    - connect the mongoose in the index.js file
    - USE ASYNC AWAIT
    - alwayse use try catch eroor when you conncet to the data base
    - write express on that file only

    - 2. This is Secound approach to connect database and express(Best approct)
    - make file in db for data base index.js
    - connect the db in src directory index.js file
    - write env required and also the path of env
    - "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js" write this in packeage.json file for import env
    -
