Monolithic Application
This repository contains a monolithic application that consists of two backend applications and one frontend application. This README file provides an overview of the monolithic application and instructions for setting it up and running.


Introduction
The monolithic application is a software system where two backend applications and one frontend application are combined into a single deployment unit. This architectural style allows for easier development, deployment, and maintenance as all components are tightly integrated.


Features
The monolithic application provides the following features:

User authentication and authorization across both backend applications
Backend application 1:
CRUD (Create, Read, Update, Delete) operations for specific data entities
Integration with external APIs for data retrieval
Backend application 2:
Real-time data processing and analytics
Integration with external services for data enrichment
Frontend application:
User interface for interacting with the backend applications
Dashboard for visualizing data and analytics


Backend Applications
The monolithic application includes the following backend applications:

Backend Application 1:

Description: Handles user management and data manipulation for specific entities.
Technologies: In this we have used flask frame work and some modules such as mysql connector,Flask,json of python and html to explore data in the table format and mysql database to store the list of students and employees in the tables

Backend Application 2:

Description: Performs real-time data processing and analytics for the monolithic application.
Technologies:In this we have used flask frame work and some modules such as mysql connector,Flask,json of python and html to explore data in the table format and mysql database to store the list of students and employees in the tables

Frontend Application
The monolithic application includes a frontend application:

Frontend Application:
Description: Provides the user interface for interacting with the monolithic application and visualizing data and analytics.
Technologies: we have used reactjs and html 

Aws services involved :
Rds-----for data storage
secret manager-------to store the credentials of db 
ec2------to run the applications 
iam----gives permissions to get the creds from secret manager


Setup
To set up and run the monolithic application, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/kalpanaIronbanda/monolithic-application.git
1.Install the required dependencies for each backend application and the frontend application. Consult the documentation of each application for detailed installation instructions.

2.Configure the backend applications. Set up configuration files or environment variables to specify database connections, API keys, and other settings. Refer to the documentation of each backend application for guidance on configuring them.

3.Initialize the databases for the backend applications. If databases are required, create the necessary tables or schemas. Follow the instructions in the backend applications' documentation for initializing the databases.

4.Build the frontend application. If required, compile or build the frontend application to generate the necessary files for deployment. Consult the frontend application's documentation for specific build instructions.

5.Start the backend applications. Run the backend applications using the appropriate command or script provided by each application. This may involve starting server processes or background workers.

6.Start the frontend application. Deploy the frontend application using the appropriate command or script provided by the application. This could involve starting a web server or bundling the application for distribution.

Usage
Once the monolithic application is set up and running, you can access the frontend application through a web browser. The frontend application will provide the user interface to interact with the backend applications and visualize data and analytics.