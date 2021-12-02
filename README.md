# This repository is a Basic Template for any Full Stack Project.

### Functionalities:

- Can Register and Login Users using a JWT Auth. (no refresh Token alloted)
- Can Create, Read Users. (Updating and Deleting will be Done Soon)
- Has a Separate API route for the Authentication. (Login and Register)
- Basic User Schema is provided, but can be extended to include more fields.
- Middleware function to check if the user has a valid JWT Token is also provided.
- In FrontEnd a Fully Functional `NavBar`, `Login Page`, `Register Page` and `Profile Page` is provided.

### Steps to use this Template:

- Clone without .git

```bash
npm degit https://github.com/Prajwalprakash3722/basic-fullstack-boilerplate-mern-stack.git
```

- Go to frontend
```bash
cd frontend
```
- Install Dependencies for frontend

```bash
npm install
```

- Run the Server

```bash
npm start
```

- Go to backend
```bash
cd backend
```
- Install Dependencies for backend

```bash
npm install
```

- Run the Server

```bash
npm start
```

- Check the API Status

```bash
curl localhost:3000/api
```

### Connect to the Database:

Connect to the Database using the following changes in `server.js` file:

- Add a new .env file in the root directory of the project and add the following lines:

```env
MONGO_URI=mongodb:mongodb uri goes here
```

Project Structure:

```bash
├── backend
│   ├── middleware
│   │   └── Auth.js
│   ├── models
│   │   └── UserSchema.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── routes
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── index.js
│   └── server.js
└── frontend
    ├── craco.config.js
    ├── LICENSE
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── README.md
    ├── README.old.md
    ├── src
    │   ├── App.js
    │   ├── index.css
    │   ├── index.js
    │   └── pages
    │       ├── HomePage.js
    │       ├── Login.js
    │       ├── Profile.js
    │       └── Register.js
    ├── tailwind.config.js
    └── yarn.lock
```

## License: MIT

## Tech Stack

- Node
- Express
- MongoDB
- JWT
- Bcrypt
- Mongoose
- react
- tailwind
- ant design
