# Frontend Application README

# Frontend Application

This directory contains the frontend application built with React. Below are the instructions for setting up and running the application.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will generate a `build` directory containing the optimized application.

## Docker Setup

To build and run the frontend application using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t frontend .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 frontend
   ```

The application will be accessible at `http://localhost:3000`.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.