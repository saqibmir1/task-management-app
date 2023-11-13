# Task Management Application

## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Backend API](#backend-api)

## Features

- Create, update, and delete tasks
- Tasks have a title, description, and status (e.g., "To Do," "In Progress," "Done")
- View a list of tasks and filter them by status
- User-friendly interface with smooth interactions
- Responsive design for both desktop and mobile devices

## Tools and Technologies

- MongoDB: Database for task data
- Express.js: Backend framework for API development
- React: Frontend library for building user interfaces
- Node.js: JavaScript runtime for server-side development

## Dependencies

- [axios](https://www.npmjs.com/package/axios): Promise-based HTTP client for the browser and Node.js
- [react](https://reactjs.org/): JavaScript library for building user interfaces
- [react-dom](https://reactjs.org/docs/react-dom.html): Entry point to the DOM and server rendering for React
- [react-scripts](https://www.npmjs.com/package/react-scripts): Configuration and scripts for Create React App
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.
- [cors](https://www.npmjs.com/package/cors): Express middleware to enable Cross-Origin Resource Sharing (CORS).

## Dev-dependencies

- [nodemon](https://www.npmjs.com/package/nodemon): Utility that monitors for changes and automatically restarts the server
- [jest](https://jestjs.io/): JavaScript testing framework
- [supertest](https://www.npmjs.com/package/supertest): HTTP assertion library for testing Node.js HTTP servers

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/saqibmir1/task-management-app.git
   cd task-management-app
   npm install
   node server/server.js
   npm start
   ```

## Backend API
The backend API is built using Express.js and provides endpoints for CRUD operations on tasks

**Endpoints :**
- GET /tasks: Get all tasks
- POST /tasks: Create a new task
- PUT /tasks/:id: Update a task by ID
- DELETE /tasks/:id: Delete a task by ID






