# Frontend Development with React - Client Guide

This guide focuses on the frontend part of the project, teaching you how to build user interfaces using React and modern development tools.

## What is the Frontend?

The frontend is the client-side of your application - what users see and interact with in their browsers. It includes:
- User interface (UI) design
- User experience (UX)
- Interacting with backend APIs
- State management
- Responsive design

## Project Structure (Client Folder)

```
client/
├── public/
│   └── vite.svg          # Static assets
├── src/
│   ├── assets/
│   │   └── react.svg     # React logo
│   ├── App.jsx           # Main React component
│   ├── index.css         # Global styles
│   └── main.jsx          # App entry point
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
├── index.html            # HTML template
└── README.md             # Default Vite README
```

## Understanding package.json

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.12.2",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "vite": "^7.1.2",
    "eslint": "^9.33.0"
  }
}
```

Key points:
- `"type": "module"` enables ES6 modules
- **axios**: HTTP client for API requests
- **react/react-dom**: Core React libraries
- **vite**: Fast build tool and dev server

## What is Vite?

Vite is a modern build tool that provides:
- Fast development server with hot module replacement (HMR)
- Quick builds for production
- Native ES modules support
- Optimized for React applications

## The Main React Component (App.jsx)

Let's break down the code:

### 1. Imports
```javascript
import React, { useState } from "react";
import axios from "axios";
```

- **React**: Core React library
- **useState**: Hook for managing component state
- **axios**: Library for making HTTP requests

### 2. Component Definition
```javascript
const App = () => {
  // State variables
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
```

- **Functional Component**: Modern React component syntax
- **useState Hook**: Manages local state
- **State Variables**: Store form input values

### 3. API Functions

#### GET Request Function
```javascript
const getRes = async () => {
  axios
    .get("http://localhost:8000")  // Note: Should be 3000
    .then((e) => {
      console.log(`Name  ${e.data.name}`);
      console.log(`Age  ${e.data.age}`);
      console.log(`Skills  ${e.data.skills}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
```

- Makes GET request to backend
- Handles response data
- Logs errors if request fails

#### POST Request Function
```javascript
const postRes = async () => {
  axios
    .post("http://localhost:8000", {  // Note: Should be 3000
      userName,
      email,
      age,
    })
    .then((e) => {
      console.log(e.data);
      // Clear form after successful submission
      setUserName("");
      setEmail("");
      setAge("");
    })
    .catch((e) => {
      console.log(e);
    });
};
```

- Sends form data to backend
- Clears form on success
- Handles errors

### 4. JSX Return (UI)
```javascript
return (
  <>
    <div className="app">
      <div className="form">
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={postRes}>SUBMIT</button>
      </div>
      <button onClick={getRes}>SEND</button>
    </div>
  </>
);
```

- **JSX**: JavaScript XML for writing HTML-like code
- **Controlled Inputs**: Value and onChange for form control
- **Event Handlers**: onClick for button interactions

## Key React Concepts

### 1. Components
Reusable pieces of UI. This app has one main component (`App`).

### 2. State
Data that can change over time. Managed with `useState`:
```javascript
const [variable, setVariable] = useState(initialValue);
```

### 3. Props
Data passed from parent to child components (not used here).

### 4. Event Handling
Responding to user interactions:
- `onClick`: Button clicks
- `onChange`: Input changes

### 5. Hooks
Special functions for using React features:
- `useState`: State management
- `useEffect`: Side effects (not used here)

## Making API Calls

### Axios Basics
```javascript
// GET request
axios.get(url)
  .then(response => {
    // Handle success
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.log(error);
  });

// POST request
axios.post(url, data)
  .then(response => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });
```

### Alternative: Fetch API
```javascript
// GET
fetch('http://localhost:3000')
  .then(res => res.json())
  .then(data => console.log(data));

// POST
fetch('http://localhost:3000', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', age: 25 })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

## Styling

The app uses CSS classes. Check `src/index.css` for global styles.

## Running the Frontend

1. Navigate to client folder: `cd client`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open http://localhost:5173 in browser

## Common Issues and Solutions

1. **Port mismatch**: Ensure backend URL matches server port (3000)
2. **CORS errors**: Backend must allow requests from frontend origin
3. **State not updating**: Use setState function, not direct assignment
4. **Component not re-rendering**: State changes trigger re-renders automatically

## Next Steps

1. Add more components (Header, Footer, etc.)
2. Implement routing with React Router
3. Add form validation
4. Manage global state with Context or Redux
5. Style with CSS frameworks (Tailwind, Material-UI)
6. Add loading states and error handling
7. Implement authentication UI

## Learning Resources

- [React Official Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Axios Documentation](https://axios-http.com/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Important Note

There's a bug in the current code: the API calls use `http://localhost:8000`, but the backend runs on port 3000. Update the URLs to match your backend port!

Remember: Practice by modifying the UI, adding new features, and experimenting with different React patterns!
