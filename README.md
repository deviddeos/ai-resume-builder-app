# AI Resume Builder

AI Resume Builder is a full-stack MERN application that helps users create, upload, edit, and preview professional resumes. It includes authentication, resume templates, AI-assisted content enhancement, PDF resume extraction, and a public resume preview flow.

## Live Demo

- Frontend: https://ai-resume-builder-app-eta.vercel.app/
- Backend: https://ai-resume-builder-app-1.onrender.com

## Features

- User registration and login with JWT authentication
- Protected dashboard for managing resumes
- Create a resume from scratch
- Upload an existing PDF resume and extract its content automatically
- AI-powered enhancement for professional summaries and job descriptions
- Multiple resume templates for different visual styles
- Resume preview and public view support
- Profile and resume image handling with ImageKit upload support
- Responsive UI built with React, Vite, Tailwind CSS, and Redux Toolkit

## Tech Stack

- Frontend: React, Vite, React Router, Redux Toolkit, Axios, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- AI and media: OpenAI SDK with a Gemini-compatible API base URL, ImageKit, multer, react-pdftotext
- Deployment: Vercel for frontend, Render for backend

## Project Structure

```text
resume-builder/
  client/        # React frontend
  server/        # Express API backend
```

### Frontend Highlights

- Landing page with hero, features, testimonials, call to action, and about sections
- Login and signup flow
- Dashboard for creating, editing, deleting, and uploading resumes
- Resume builder pages and preview pages
- Ready-made templates such as Classic, Minimal, Modern, and Minimal Image layouts

### Backend Highlights

- User authentication routes
- Resume CRUD routes
- AI routes for improving content and uploading resumes
- MongoDB connection helper and middleware for protected routes

## API Overview

### Auth

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login and receive a JWT token
- `GET /api/users/data` - Fetch the current user profile
- `GET /api/users/resumes` - Fetch all resumes for the logged-in user

### Resumes

- `POST /api/resumes/create` - Create a blank resume
- `PUT /api/resumes/update` - Update a resume, including image upload
- `DELETE /api/resumes/delete/:resumeId` - Delete a resume
- `GET /api/resumes/get/:resumeId` - Fetch a private resume by id
- `GET /api/resumes/get/public/:resumeId` - Fetch a public resume by id

### AI

- `POST /api/ai/enhance-pro-sum` - Improve a professional summary
- `POST /api/ai/enhance-job-desc` - Improve a job description
- `POST /api/ai/upload-resume` - Extract resume data from a PDF and create a resume

## Local Setup

### Prerequisites

- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection string
- ImageKit credentials for image uploads
- An OpenAI-compatible API key and model configuration for AI features

### 1. Clone the repository

```bash
git clone https://github.com/deviddeos/ai-resume-builder-app.git
cd resume-builder
```

### 2. Install dependencies

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

### 3. Configure environment variables

Create a `client/.env` file:

```bash
VITE_BASE_URL=http://localhost:4000
```

Create a `server/.env` file:

```bash
PORT=4000
MONGODB_URI=mongodb://localhost:27017
JWT_SECRET=your_secret_key

IMAGEKIT_PRIVATE_KEY=''

OPENAI_API_KEY=''
OPENAI_BASE_URL=''
OPENAI_MODEL=''
```

### 4. Run the app locally

Start the backend:

```bash
cd server
npm run start
```

Start the frontend:

```bash
cd client
npm run dev
```

## Deployment Notes

- Frontend is deployed on Vercel
- Backend is deployed on Render
- Make sure the frontend `VITE_BASE_URL` points to the deployed backend URL
- Make sure Render environment variables are configured before deploying the backend

## Notes

- The app uses JWT stored in local storage for authentication
- Protected API requests automatically attach the token through the Axios interceptor
- If you sign in with an existing email, the server returns a conflict response

