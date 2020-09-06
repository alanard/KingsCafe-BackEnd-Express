# KingsCafe-BackEnd-Express
<p align="center">
<img align="center" src="readme-image/kingscafe_logos.PNG" width="400" height="250"> <img align="center" src="readme-image/express-js.png" width="300" height="220">
</p>

king's-cafe backend is a backend for kings's-cafe frontend application. Built with NodeJs using the ExpressJs Framework. Express.js is a web application framework for Node.js.
[More about Express](https://expressjs.com/)
## Built With

[Express.js](https://expressjs.com/) || [Node.js](https://nodejs.org/en/)

## Requirements
1. [Node.js](https://nodejs.org/en/) <br>
2. [Postman](https://www.postman.com/) <br>
3. Web Server (ex. localhost)

# How to run the app ?
1. Open app's directory in CMD or Terminal
2. Type npm install
3. Make new file a called <b>.env </b>, set up first here
4. Turn on Web Server and MySQL can using Third-party tool like xampp, or mampp, lampp, etc.
5. Create a database with the name note, and Import file note.sql to phpmyadmin
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.
8. You can see all the end point here

## Set up .env file
Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=[your_database_host]
DB_PORT=[your_database_port]
DB_USER=[your_database_username]
DB_PASS=[your_database_pass]
DB_NAME=kingscafe


BASE_URL=http://localhost:8080/
PORT=4100

SECRET=[jwt_secret_key]
```

## End Point
<b>1. Auth</b> <br>

<b>- POST</b> /api/v1/users/register<br>
<b>- POST</b> /api/v1/users/login<br>
<br>
<b>3. Products</b><br>
<br>
<b>- POST</b> /api/v1/products/<br>
<b>- GET</b> /api/v1/products/:id<br>
<b>- DELETE</b> /api/v1/products/:id<br>
<b>- PATCH</b> /api/v1/products/:id<br>
<br>
<b>4. Categories</b><br>
<br>
<b>- POST</b> /api/v1/categories/<br>
<b>- GET</b> /api/v1/categories/:id<br>
<b>- DELETE</b> /api/v1/categories/:id<br>
<b>- PATCH</b> /api/v1/categories/:id<br>
<br>
<b>5. Histories</b><br>
<br>
<b>- POST</b> /api/v1/histories/<br>
<b>- GET</b> /api/v1/histories/:id<br>
<b>- DELETE</b> /api/v1/histories/:id<br>
<b>- PATCH</b>/api/v1/histories/:id<br>


## Related Project
- [Frontend-King'sCafe](https://github.com/alanard/Kingscafe-frontend-vue)
