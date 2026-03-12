# Backend Application Documentation

## Overview

This is the backend component of the Fullstack Docker Sample project. It is built using Node.js and Express, providing a RESTful API for the frontend application.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd fullstack-docker-sample/backend
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**
   You can run the application locally using:
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000` by default.

## Docker Setup

To run the backend application using Docker, follow these steps:

1. **Build the Docker Image**
   ```bash
   docker build -t backend .
   ```

2. **Run the Docker Container**
   ```bash
   docker run -p 3000:3000 backend
   ```

## API Endpoints

- **GET /api/example**
  - Description: Example endpoint to demonstrate API functionality.
  - Response: Returns a sample JSON response.

## Notes

- Ensure that the database service is running and accessible for the backend to function correctly.
- Modify the `src/app.js` and `src/routes.js` files to add or change API functionality as needed.