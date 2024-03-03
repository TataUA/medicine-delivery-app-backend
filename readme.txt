# Medicine Delivery App (Backend)
This is a backend server for an online stores built with Node.js and Express. It provides APIs for getting stores, their products and adding orders.

## Features
Shops API: Allows to receive stores.
Products API: Allows to receive products.
Orders API: Allows the creation orders.

## Installation
1.Clone the repository: 
```
git clone https://github.com/TataUA/medicine-delivery-app-backend
```
2.Navigate to the project folder:
```
cd medicine-delivery-app-backend
```
3. Install dependencies:
```
npm install
```
4.Set up environment variables:
-Create a .env file in the root directory and add the following variables:
```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/stores
JWT_SECRET=your_secret_key
```

## Usage
1.Start the server:
```
npm start
```
2.Use Postman or a similar tool to send requests to the server.

## API Endpoints
Stores
GET /api/shops: Get all stores.
Products
GET /api/products/:ownerId: Get products by store`s ID.
Orders
POST /api/orders: Create a new order.

