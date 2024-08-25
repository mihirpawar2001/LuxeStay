# LuxeStay

**LuxeStay** is a hotel management system designed to provide a seamless experience for both hotel administrators and guests. This project integrates a React frontend with a .NET backend (originally Spring Boot) and MySQL database to manage room bookings, customer information, and hotel services efficiently.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

LuxeStay aims to digitize hotel operations by providing a web application that allows hotel management to add, edit, and view room details, manage bookings, and interact with customers. Guests can browse available rooms, make reservations, and provide feedback on their stay.

## Features

- **Admin Panel**: Add, edit, and delete rooms with details like room type, price, availability, and images.
- **Customer Interface**: Browse available rooms, book rooms, and view booking history.
- **Authentication**: Secure login and registration for both admins and guests.
- **Payment Integration**: (Future feature) Integration with payment gateways for seamless transactions.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Custom styles for a modern and user-friendly interface.
- **FontAwesome**: Icons used throughout the application for enhanced UI.

### Backend

- **.NET Core**: Server-side framework used for handling business logic and database interactions.
- **MySQL**: Database for storing user data, room details, and booking information.
- **JWT**: JSON Web Tokens for secure authentication and authorization.

### Deployment

- **AWS S3**: Storage service for hosting images and other static assets.
- **GitHub**: Version control and collaboration.

## Installation

### Prerequisites

- Node.js and npm
- .NET Core SDK
- MySQL
- Git

### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mihirpawar2001/LuxeStay.git
   cd LuxeStay

   ```

2. **Install Frontend Dependencies**:

   ```bash
   cd frontend
   npm install

   ```

3. **Install backend dependencies**:

   ```bash
   cd ../backend
   ./mvnw clean install

   ```

4. **Set up the MySQL database**:

   - Create a database named luxestay.
   - Run the provided SQL script (db/schema.sql) to set up the database schema.

5. **Configure environment variables**:
   - Create a .env file in the backend directory to store your AWS keys and database connection details.
   ```bash
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   DB_CONNECTION_STRING="Server=localhost;Database=luxestay;User=root;Password=yourpassword;"
   ```

# Configuration

## AWS S3 Setup

- Create a bucket on AWS S3 for storing room images.
- Configure the bucket policy to allow access to the images.
- Store your AWS credentials in the .env file.

## Spring Boot Configuration

- Update application.properties with your database connection string and other necessary configurations.

## Usage

1. **Start the Backend**:

   ```bash
   cd backend
   ./mvnw spring-boot:run

   ```

2. **Start the Frontend**:

   ```bash
   cd frontend
   npm start

   ```

3. Visit http://localhost:3000 to access the application.

## Screenshots

Add screenshots of the application here to give users a visual overview of LuxeStay.

## Contributing

Contributions are welcome! Please follow the contribution guidelines to submit issues, pull requests, or suggest features.

## Contact

- Project Maintainer: Mihir Pawar
- Email: pawarmihir36@gmail.com
- GitHub: mihirpawar2001
