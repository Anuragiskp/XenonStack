**House/Apartment Rentals Website**
**Overview**
This project is a React-based web application for browsing and managing house/apartment rentals. It includes features like fetching and displaying rental properties, pagination for property listings, and a responsive design to ensure compatibility across various devices.

**Project Structure**
Frontend: Built with React, Bootstrap, and MUI (Material-UI).
Backend: Node.js with Express.js.
Database: MongoDB for storing property data.

**Features**
Fetch and Display Property Data: Retrieves property listings from a MongoDB database and displays them on the frontend.
Pagination: Handles pagination of property listings to improve user experience.
Responsive Design: Uses Bootstrap and custom CSS for a mobile-friendly design.

**Installation**
**Prerequisites**
Node.js
MongoDB
npm
**Backend Setup**
Clone the Repository: git clone https://github.com/Anuragiskp/XenonStack.git7
Navigate to Backend Directory: cd theme/backend
Install Dependencies: npm install
Create a .env File: DB_URL = mongodb://localhost:27017/yourdbname
                  JWT_SECRET = self_generated code
Start the Server: npm start

**Frontend Setup**
Navigate to Backend Directory: cd theme/frontend
Install Dependencies: npm install
Start the Server: npm start

**API Endpoints**
**GET /property/data**
  Description: Retrieves all property data from the database.
  Response: JSON array of property objects.
**POST /property/data**
  Description: Adds new property data to the database.
  Request Body:
  {
  "Suburb": "Abbotsford",
  "Rooms": 2,
  "Type": "h",
  "Price": 1480000,
  "Method": "S",
  "Date": "03-12-2016",
  "Distance": 2.5,
  "Postcode": 3067,
  "Bedroom2": 2,
  "Bathroom": 1,
  "Car": 1,
  "Landsize": 202,
  "BuildingArea": "",
  "YearBuilt": "",
  "CouncilArea": "Yarra",
  "Regionname": "Northern Metropolitan"
}


**Frontend Components**
**Collections**
Description: Displays property listings with pagination.
Fetches Data: From the API endpoint /property/data.
Pagination: Controls which properties are displayed per page.
UI Components: Uses React Bootstrap for layout and styling.

**Styling**
CSS: Custom styles are located in src/styles/ directory. CSS modules or global styles are used for component styling.
