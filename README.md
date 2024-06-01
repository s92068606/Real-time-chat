# Real-time-chat-app

Real-Time Chat App:
This is a simple real-time chat application built using Node.js, Express, Socket.IO, and MySQL.

# Setup Instructions

--Prerequisites
1.Node.js installed on your machine
2.MySQL installed and running

--Installation
1.Clone this repository to your local machine.
2.Navigate to the project directory in your terminal.
3.Install dependencies using the following command:npm install
4.Set up the MySQL database by executing the database.sql script provided in the sql folder.

--Running the Application
1.Start the server by running the following command:node server.js / npm start
2.Open your web browser and navigate to http: //localhost:3000 to access the chat application.
3.Enter your desired username and click "Join" to enter the chat room.
4.Start sending and receiving messages in real-time!

# Application Structure

•server.js: Contains the backend code for setting up the Express server, handling WebSocket connections with Socket.IO, and managing communication between clients.
•public: Directory containing static files served to clients.
•index.html: HTML file defining the structure of the chat interface.
•main.js: Client-side JavaScript file responsible for handling user interactions and WebSocket communication with the server.
•style.css: CSS file defining the visual styling of the chat interface.
•sql: Directory containing SQL scripts for setting up the MySQL database.

# Assumptions and Limitations

--Assumptions:

Users can join the chat with any desired username without authentication.
Desktop notifications are supported by the users' browsers.

--Limitations:

The application currently lacks user authentication and authorization mechanisms.
It does not persist chat messages beyond the current session, as messages are stored in memory rather than a persistent database like Redis.
The application's styling and UI are basic and may require further enhancement for a more polished user experience.
