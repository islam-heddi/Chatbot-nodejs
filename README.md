# Chatbot Node.js

This project is a simple chatbot application built with Node.js. The user asks a question, and the chatbot generates a response using an AI model.

## Installation

1. Download or git clone the project.
2. Open the folder as a project in your IDE.
3. Create a `.env` file in each of the two folders (`client` and `server`).

### Client `.env`
```
VITE_API_URL=http://localhost:5000
```

### Server `.env`
```
DATABASE_LINK=<YOUR MONGO DB LINK>
JWT_SECRET=<generate a token and put it here>
GEMINI_API_KEY=<YOUR GEMINI API KEY>
VIEW_LINK=http://localhost:5173
```

4. Open a terminal and run the following commands:

For the client:
```bash
cd client
npm install
npm run dev
```

For the server (in another terminal):
```bash
cd server
npm install
npm run dev
```

## Tech Stack

### Language 
- Typescript

### Frontend
- React.js / Vite
- Tailwind CSS
- Shadcn
- Axios

### Backend
- Node.js
- Express.js
- JSON Web Token
- OpenAPI
- Mongoose
- Bcrypt
- CORS
- Dotenv
- Nodemon
- Swagger
- OpenAI API

### Database
- MongoDB

### AI Model
- Gemini 2.5 Flash

## Author

Created by Islam Heddi. If you like it, please leave a star and follow!