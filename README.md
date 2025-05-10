# E-commerce Fullstack Template

# 📌 User Authentication API

## 🚀 Introduction

This is a simple user authentication API built with **Node.js + Express + MongoDB + JWT**, providing user registration, login, and admin login.

---

## 📁 Installation and Setup

### 1. Clone the Project

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` file

```plaintext
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
```

### 4. Start the Server

```bash
npm run dev
```

---

## 📌 API Documentation

### 🔑 User Registration

- **URL**: `POST /api/auth/register`
- **Request Body**:

  ```json
  {
    "name": "Your Name",
    "email": "your_email@example.com",
    "password": "your_password"
  }
  ```

- **Response**:

  ```json
  { "success": true, "token": "your_jwt_token" }
  ```

### 🔑 User Login

- **URL**: `POST /api/auth/login`
- **Request Body**:

  ```json
  { "email": "your_email@example.com", "password": "your_password" }
  ```

- **Response**:

  ```json
  { "success": true, "token": "your_jwt_token" }
  ```

### 🔑 Admin Login

- **URL**: `POST /api/auth/admin`
- **Request Body**:

  ```json
  { "email": "admin@example.com", "password": "your_admin_password" }
  ```

- **Response**:

  ```json
  { "success": true, "token": "your_jwt_token" }
  ```

---

## 🚨 Error Handling

- **400 Bad Request**: User does not exist, invalid password, or invalid input.
- **500 Internal Server Error**: Server error.

---

## 🔧 Development Highlights

- **`bcrypt`** for password hashing.
- **`jsonwebtoken`** (JWT) for user authentication.
- **`validator`** for email validation.
- Admin credentials are stored in **`.env`** file.

---

## 📌 Future Improvements

- Add email verification.
- Provide password reset functionality.
- Enhance user data protection (e.g., data encryption).
