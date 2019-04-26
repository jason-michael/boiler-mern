# MERN Starter
Full-stack boilerplate. Includes mongoose and axios.

![](https://scotch-res.cloudinary.com/image/upload/w_1000,q_auto:good,f_auto/v1540545426/tzs50mjrlopv85r3qjpq.jpg)

# Usage
Run `yarn start:dev` or `npm run start:dev` to start the app.

Change the database name in `server.js` to match your database name.

Modify the model, controller and routes (`/routes/index.js`) to suit your data.

# API Testing (VSCode)
#### Intended to be used with the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for VSCode.

Separate requests with triple pound signs. `###`

Example: 

```json
GET http://localhost:5000/api/users

###

POST http://localhost:5000/api/users
Content-Type: application/json

{
  "name": "John Doe",
  "phone": "123-420-6969",
  "email": "doe.john@email.com"
}

###

DELETE http://localhost:5000/api/users
Content-Type: application/json

{
  "_id": "" // insert id to test
}

###

PUT http://localhost:5000/api/users
Content-Type: application/json

{
  "_id": "" // insert id to test
}
```