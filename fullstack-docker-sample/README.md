# Fullstack Docker Sample

This project is a fullstack application that demonstrates how to set up a frontend, backend, and database using Docker. The application is structured to allow easy development and deployment using Docker containers.

## Project Structure

```
fullstack-docker-sample
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── backend
│   ├── src
│   │   ├── app.js
│   │   └── routes.js
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
├── database
│   ├── init.sql
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fullstack-docker-sample
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the frontend application at `http://localhost:3000`.

### Frontend

The frontend is built using React. It is located in the `frontend` directory. 

- To run the frontend separately, navigate to the `frontend` directory and run:
  ```
  npm install
  npm start
  ```

### Backend

The backend is built using Node.js and Express. It is located in the `backend` directory.

- To run the backend separately, navigate to the `backend` directory and run:
  ```
  npm install
  npm start
  ```

### Database

The database is initialized with SQL commands located in `database/init.sql`. 

- The database service is configured in the `docker-compose.yml` file.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.