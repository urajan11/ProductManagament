
Product Management System

A simple product management system built using React for the frontend and Spring Boot for the backend. This project allows users to add, edit, view, and delete products.

Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

 Overview

The Product Management System is designed to manage a list of products. Users can add new products, view the list of products, edit existing products, and delete products from the list. This project is a full-stack application with a React frontend and a Spring Boot backend.

Features

- Add new products
- View all products
- Edit existing products
- Delete products

 Technologies Used

- Frontend:
  - React
  - Bootstrap
  - Axios

- Backend:
  - Spring Boot
  - Maven
  - MySQL Database 
  
 Setup

 Prerequisites

- Node.js
- npm
- Java (JDK 11 or higher)
- Maven

 Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/product-management-system.git
    cd product-management-system/frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend:
    ```bash
    npm start
    ```

 Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

2. Build the project:
    ```bash
    mvn clean install
    ```

3. Run the backend:
    ```bash
    mvn spring-boot:run
    ```

 Access the Application

Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the frontend.

 Usage

- **Add Product:** Click on the "Add Product" link in the navigation bar, fill in the product details, and submit.
- **View Products:** The home page lists all the products.
- **Edit Product:** Click on the "Edit" button next to a product, update the details, and submit.
- **Delete Product:** Click on the "Delete" button next to a product.

API Endpoints

The following API endpoints are available:

- `POST /saveProduct` - Add a new product
- `GET /` - Retrieve all products
- `GET /{id}` - Retrieve a product by ID
- `DELETE /deleteProduct/{id}` - Delete a product by ID
- `POST /editProduct/{id}` - Edit a product by ID

 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request


