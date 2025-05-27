
# 🏡 Real Estate Listing Web Application

A modern full-stack real estate listing platform where users can discover, post, favorite, and chat about properties. Built with React, Express, MongoDB, Prisma, Socket.IO, and Sass.

---

## 🔧 Tech Stack

### 🖥️ Frontend (`/client`)
- **React 18**
- **React Router DOM** – Routing
- **Axios** – API requests
- **Zustand** – Global state management
- **React Quill** – Rich-text editor
- **React Slick** – Image sliders
- **Leaflet & React-Leaflet** – Maps
- **Sass** – Styling
- **Socket.IO Client** – Real-time messaging

### 🌐 Backend API (`/api`)
- **Node.js + Express**
- **MongoDB + Mongoose**
- **Prisma** – Additional ORM for select data models
- **JWT + bcrypt** – Authentication & security
- **Cookie-parser**
- **CORS** – Secure cross-origin support
- **dotenv** – Environment variable handling

### 💬 Socket Server (`/socket`)
- **Socket.IO** – Real-time communication layer

---

## 🚀 Features

- 🔐 Secure Authentication (JWT)
- 🏡 Property Listings (Images, Location, Pricing, etc.)
- 🔎 Powerful Search & Filters
- 💬 Real-Time Chat via Socket.IO
- 💾 Save Properties to Favorites
- 📤 Add/Edit Property Listings
- 🧑 User Profile Management
- 🗺️ Interactive Map using Leaflet
- 🎨 Clean UI with Custom Sass Styling

---

## 📁 Project Structure

```
real-estate-app/
├── api/               # Express backend API with Prisma & Mongoose
├── client/            # React frontend with Sass and Zustand
├── socket/            # Socket.IO server for chat
└── README.md          # Project documentation
```

---

## 🛠️ Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/real-estate-app.git
cd real-estate-app
```

### 2. Setup Backend API (`/api`)

```bash
cd api
npm install
```

Create a `.env` file in the `/api` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
```

If you're using Prisma:

```bash
npx prisma generate
```

Start the backend:

```bash
node app.js
```

### 3. Setup Socket Server (`/socket`)

```bash
cd ../socket
npm install
node app.js
```

### 4. Setup Frontend (`/client`)

```bash
cd ../client
npm install
npm run dev
```

The app will be running at `http://localhost:5173`.

---
## 🌟 Future Enhancements

- Admin dashboard for moderation
- Email/push notifications
- Pagination and better performance
- Google Maps integration
- Dark mode

---

## 🧑‍💻 Author

Created by **Abu Huzefa**

- GitHub: [@Magma-x](https://github.com/Magma-x)
- X.com: [@abuhuzefa_](https://x.com/abuhuzefa_)

---
