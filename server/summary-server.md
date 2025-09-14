# Backend Development with Node.js and Express - Server Guide

This guide focuses on the backend part of the project, teaching you how to build server-side applications using Node.js and Express.js.

## What is the Backend?

The backend is the server-side of your application. It handles:
- Processing requests from clients (browsers, mobile apps)
- Managing data (databases, files)
- Business logic
- Authentication and security
- API creation

## Project Structure (Server Folder)

```
server/
├── package.json      # Project dependencies and scripts
├── package-lock.json # Dependency lock file
└── server.js         # Main server file
```

## Understanding package.json

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "dependencies": {
    "express": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^17.2.2",
    "mongoose": "^8.18.1",
    "nodemon": "^3.1.10"
  }
}
```

Key points:
- `"type": "module"` enables ES6 imports/exports
- Dependencies include Express (web framework), CORS (cross-origin handling), dotenv (environment variables)

## The Main Server File (server.js)

Let's break down each part:

### 1. Imports
```javascript
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
```

- **express**: Web framework for Node.js
- **dotenv**: Loads environment variables
- **cors**: Handles Cross-Origin Resource Sharing

### 2. Environment Setup
```javascript
dotenv.config();
```

This loads variables from a `.env` file (if it exists).

### 3. Creating the Express App
```javascript
const app = express();
```

This creates your main application instance.

### 4. Middleware Setup

#### CORS Middleware
```javascript
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
```

- Allows requests from your frontend (running on port 5173)
- Prevents browser security errors

#### JSON Parsing Middleware
```javascript
app.use(express.json());
```

- Parses incoming JSON data
- Makes `req.body` available in POST requests

#### Custom Authentication Middleware
```javascript
app.use((req, res, next) => {
  if (req.method === "GET") {
    return next(); // allow GET without password
  }
  if (req.body.password == password) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});
```

- Checks if the request method is GET; if so, allows it without authentication
- For other methods (like POST), verifies the password in the request body
- If password matches "123456", proceeds to the route handler
- If not, sends a 401 Unauthorized response

### 5. Routes

#### GET Route
```javascript
app.get("/", (req, res) => {
  res.json({ name: "Ashim", age: 19, skills: "MERN" });
});
```

- **Route**: `"/"` (root path)
- **Method**: GET (for retrieving data)
- **Response**: Sends JSON data back to client

#### POST Route
```javascript
app.post("/", (req, res) => {
  res.send(req.body);
});
```

- **Route**: `"/"` (same path as GET)
- **Method**: POST (for sending data)
- **Request Body**: Contains data sent from frontend including password for authentication
- **Response**: Echoes back the received data

### 6. Starting the Server
```javascript
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
```

- Starts server on port 3000 (or PORT from environment)
- Logs confirmation message

## Key Concepts to Learn

### 1. HTTP Methods
- **GET**: Retrieve data from server
- **POST**: Send data to server
- **PUT**: Update existing data
- **DELETE**: Remove data

### 2. Request and Response Objects
- `req` (request): Contains information about the incoming request
- `res` (response): Used to send data back to the client

### 3. Middleware
Functions that run between receiving a request and sending a response. Examples:
- CORS handling
- Authentication
- Logging
- Error handling

### 4. Environment Variables
Store sensitive data (API keys, database URLs) in `.env` files:
```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
SECRET_KEY=your-secret-key
```

## Running the Server

1. Navigate to server folder: `cd server`
2. Install dependencies: `npm install`
3. Start server: `node server.js`
4. Or use nodemon for auto-restart: `npx nodemon server.js`

## Testing the API

You can test the endpoints using:
- Browser (for GET requests)
- Postman or Hoppscotch
- curl commands:
  ```bash
  # Test GET
  curl http://localhost:3000

  # Test POST
  curl -X POST http://localhost:3000 \
    -H "Content-Type: application/json" \
    -d '{"name":"John","age":25}'
  ```

## Common Issues and Solutions

1. **Port already in use**: Change port in code or kill process
2. **CORS errors**: Check CORS middleware configuration
3. **Cannot read property of undefined**: Check if middleware is properly set up

## Next Steps

1. Add more routes (users, products, etc.)
2. Connect to a database (MongoDB with Mongoose)
3. Add input validation
4. Implement authentication
5. Add error handling middleware
6. Create separate route files

## Learning Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)

Remember: Practice by modifying the code, adding new routes, and experimenting with different middleware!
