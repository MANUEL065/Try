# Healthcare System Backend API
This project implements a backend API for a healthcare system, providing endpoints to register patients, start encounters, submit patient vitals, and view patient information. The API is built using Node.js with the Express framework and MongoDB for data persistence.

Functional Requirements and Endpoints
## Register a New Patient

Endpoint: POST /patients
Request Body:


{
  "surname": "Mensah",
  "otherNames": "Emmanuel",
  "gender": "Male",
  "phoneNumber": "13656756",
  "residentialAddress": "P.O Box Legon 65",
  "emergencyContact": {
    "name": "Prince Mensah,
    "phoneNumber": "024565621",
    "relationship": "Brother"
  }
}

## Start an Encounter for a Patient

Endpoint: POST /encounters
Request Body


{
  "patientId": "73490394",
  "dateTime": "15/03/2022 6:15pm",
  "encounterType": "OPD"
}


## Submit Patient Vitals

Endpoint: POST /vitals
Request Body:

{
  "patientId": "73490394",
  "bloodPressure": "120/80",
  "temperature": "37.5",
  "pulse": "80",
  "spO2": "98"
}

## Get a List of Patients

Endpoint: GET /patients
Response: 200 OK

[
  {
    "id": "73490394",
    "surname": "Mensah",
    "otherNames": "Emmanuel",
    "gender": "Male",
    "phoneNumber": "024565621"
  },
  ...
]

## Get Details of a Specific Patient

Endpoint: GET /patients/:id
Response: 200 OK

{
  "id": "73490394",
  "surname": "Mensah",
  "otherNames": "Emmanuel",
  "gender": "Male",
  "phoneNumber": "024565621",
  "residentialAddress": "123 Main St",
  "emergencyContact": {
    "name": "Prince Mensah",
    "phoneNumber": "0246857541",
    "relationship": "Brother"
  }
}


# Implementation Details
The backend is implemented in Node.js using the Express framework for routing and middleware.
MongoDB is used as the database for persisting patient and encounter data.
Each functional requirement is implemented in a separate commit to facilitate tracking and management.
