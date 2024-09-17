# Employee and User Management API

This is a Node.js-based API for managing employees and users. The API is built using Express and MySQL, and it allows for creating, retrieving, updating, and deleting employee and user records. The application is structured using controllers, services, and database access layers.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Employee Endpoints](#employee-endpoints)
- [Error Handling](#error-handling)
- [Database Setup](#database-setup)
- [Starting the Server](#starting-the-server)


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GiftMamarara/Gift-SQL-API/.git
    cd your-repo-name
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Set up the environment variables by creating a `.env` file in the root directory with the following content:

    ```env
    DB_HOST=your-database-host
    DB_USER=your-database-username
    DB_PASSWORD=your-database-password
    DB_NAME=your-database-name
    ```

## Configuration

The application uses `dotenv` to manage environment variables. Ensure that your `.env` file is properly configured as shown in the installation steps.

## API Endpoints

### User Endpoints

- **GET /api/users**: Retrieve all users.
- **GET /api/users/:id**: Retrieve a user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update an existing user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

### Employee Endpoints

- **GET /api/employees**: Retrieve all employees.
- **GET /api/employees/:id**: Retrieve an employee by ID.
- **POST /api/employees**: Create a new employee.
- **PUT /api/employees/:id**: Update an existing employee by ID.
- **DELETE /api/employees/:id**: Delete an employee by ID.

## Error Handling

The application includes global error handling middleware that logs the error and returns a 500 status code with a generic error message. This can be found in the main `app.js` file:

```javascript
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Something went wrong!');
});
```

## Database Setup

This application uses MySQL with the `mysql2/promise` library. Ensure that you have a MySQL database set up and the credentials added to your `.env` file.

The database connection is created using a connection pool:

```javascript
const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
```

Stored procedures like `usp_user_add_or_edit` and `usp_employee_add_or_edit` should be created in your database to handle user and employee data operations.

## Starting the Server

After setting up your environment and database, you can start the server using the following command:

```bash
node index.js
```

The server will start on port 3000 by default and will be connected to the MySQL database.


