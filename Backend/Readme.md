# Janitri Backend

This is a backend project designed to manage users, patients, and heart rate monitoring data. It uses **Node.js**, **Express**, and **MongoDB** to handle the API and data management. The backend provides a set of RESTful APIs for registration, login, patient management, and heart rate recording.

## Features

- **User Management**: Allows users to register and log in using their email and password.
- **Patient Management**: Enables adding and retrieving patient details.
- **Heart Rate Monitoring**: Allows recording and retrieving heart rate data for patients.

## Technologies

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing user, patient, and heart rate data.
- **Mongoose**: ODM for MongoDB, used to interact with the database.
- **Axios**: For making API calls (used on the frontend).

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB locally](https://www.mongodb.com/try/download/community) or use a cloud database like MongoDB Atlas.

### Steps

1. Clone this repository to your local machine:

   git clone https://github.com/your-username/janitri-backend.git
   cd janitri-backend

2. npm install
   Create a .env file at the root of your project with the following content:

3. npm start
   This will start the backend server on the specified port (default: 5000).

4. API Endpoint
   1. Register a User
      Endpoint: POST /api/users/register

         Request Body:
       {
       "email": "user@example.com",
       "password": "securepassword"
        }
       Response: A success or error message.

   2. Login a User
       Endpoint: POST /api/users/login
        Request Body:
         {
         "email": "user@example.com",
        "password": "securepassword"
        }
       Response: A success or error message.

 
   3. Add a Patient
       Endpoint: POST /api/patients
       Request Body:
         {
         "name": "John Doe",
         "age": 45,
         "userId": "user_id_here"
        }
       Response: The added patient details.

    4. Get All Patients
      Endpoint: GET /api/patients
      Response: A list of all patients in the database.

    5. Record Heart Rate Data
       Endpoint: POST /api/heartRate
       Request Body:
       {
        "patientId": "patient_id_here",
         "heartRate": 72
       }
       Response: The recorded heart rate data.

   6. Get Heart Rate Data
      Endpoint: GET /api/heartRate/:patientId
      Response: Heart rate data for the given patient ID.

Error Handling
400: Bad Request (Missing/Invalid data)
401: Unauthorized (Invalid email/password)
404: Not Found (No patient found with the provided ID)
500: Internal Server Error
   
Testing
To test the API, you can use tools like Postman or cURL to make requests to the endpoints.

