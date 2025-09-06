# EcoFinds Backend and Frontend Application

EcoFinds is a full-stack e-commerce project that allows users to browse, add, and manage products including uploading images. The backend is built with Node.js, Express, and PostgreSQL with Prisma ORM, and the frontend is built using React and Material UI.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Authentication & Authorization](#authentication--authorization)
- [File Uploads](#file-uploads)
- [User Product Management](#user-product-management)
- [Frontend Usage](#frontend-usage)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

EcoFinds is designed to provide a seamless experience for users to explore and manage products online. Users can create accounts, add products with images, browse products, and delete their own products securely. The backend uses Prisma ORM for database interaction with PostgreSQL, while the frontend is built using React and Material UI components.

---

## Features

- User registration, login, and authentication
- CRUD operations for products
- Uploading and serving product images
- Users can only delete their own products
- Secure API with permissions and authorization middleware
- Responsive frontend interface with product listing and management

---

## Tech Stack

- Backend:
  - Node.js
  - Express.js
  - PostgreSQL
  - Prisma ORM
- Frontend:
  - React.js
  - Material UI
  - Axios
- Other:
  - Multer for image upload handling
  - CORS enabled backend

---

## Setup and Installation

### Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL installed and running
- Yarn or npm for package management

### Clone repository

git clone https://github.com/yourusername/ecofinds.git
cd ecofinds/server

text

### Install dependencies

npm install

text

---

## Database Setup

1. Create a PostgreSQL database named `ecofindsdb`.

2. Configure your `.env` file with the database connection string:

DATABASE_URL="postgresql://username:password@localhost:5432/ecofindsdb?schema=public"

text

3. Run Prisma migrations to create the database schema:

npx prisma migrate dev --name init

text

4. Seed initial data if applicable.

---

## Running the Application

### Start backend server

npm run dev

text

Backend runs on port 5000 by default.

### Start frontend server

Navigate to your frontend folder and run:

npm start

text

Frontend will run on port 3000 by default.

---

## API Endpoints

### Auth Routes

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### User Routes

- `GET /api/users/me` - Get current user profile

### Product Routes

- `GET /api/products` - List all products
- `POST /api/products` - Add new product (authenticated)
- `DELETE /api/products/:id` - Delete product (only owner)

### Upload Routes

- `POST /api/upload` - Upload product images

---

## Authentication & Authorization

- JWT-based authentication protects sensitive routes.
- Middleware verifies user tokens and adds `req.user`.
- Users can only manage their own products (permission check on deletion).

---

## File Uploads

- Multer is used for handling multipart/form-data for image uploads.
- Uploaded images are stored in `/uploads` directory inside the backend server.
- The `/uploads` directory is statically served for frontend image access at `http://localhost:5000/uploads`.

---

## User Product Management

- Users can add products with title, description, price, category, and image.
- Users can delete only products they added.
- Backend enforces ownership checks before deletion.

---

## Frontend Usage

- React product card displays product info and images.
- Delete button appears only for owner-managed products.
- Images support full URLs or relative backend paths.
- Axios handles API requests.

---

## Known Issues

- External placeholder images may fail to load if DNS issues occur.
- Ensure backend static file serving path matches your project structure.
- Properly configure environment variables before running.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -am 'Add your feature'`)
4. Push branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

For questions or support, please open an issue or contact the maintainer.
