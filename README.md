# Online Store

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Urls Overview](#urls-overview)
* [Setup](#setup)

## General info
This is an online store on Django + React + PostgreSQL

Available features:
- Registration and authorization.
- Personal account with display of orders.
- Product catalog.
- Categories for products.
- Shopping cart.
- Admin panel (minimal) (CRUD - for products).
- Notifications in the admin panel via web-socket about order placement .
- Sending emails with registration and order placement notifications.
- API to get a list of products with categories, filters, authorization via JWT

## Technologies
Project is created with:
* DRF
* React
* PostgreSQl
* Docker
* Nginx

## Urls Overview
1. Backend
  * Auth
    - api/auth - LOGIN USER
    - api/auth/refresh - REFRESH JWT TOKEN
    - api/auth/register - REGISTER USER
  * Products
    - api/products - GET OR CREATE PRODUCTS (create ONLY for superuser)
    - api/products/id - GET, UPDATE, DELETE PRODUCT BY ITS ID (update, delete ONLY for superuser)
  * Categories
    - api/categories - GET ALL PRODUCT CATEGORIES
    - api/categories/id - GET, UPDATE, DELETE SPECIFIC CATEFORY BY ITS ID (update, delete ONLY for superuser)
    - api/categories/id/products - GET PRODUCTS THAT BELONG TO CERTAIN CATEGORY
  * Orders
    - api/orders - GET OR CREATE ORDER (ONLY for logged in user)
2. Frontend
    - /login - GO TO LOGIN PAGE
    - /register - GO TO REGISTER PAGE
    - /main - GO TO MAIN PAGE WITH ALL PRODUCTS
    - /cart - GO TO CART (ONLY for logged in user)
    - /orders - GO TO LIST OF ORDER (ONLY for logged in user)

## Setup
Create .env file in the main directory and fill in as it is shown in .env.example file
- To run this project:
````
- git clone /*paste repository url*/
- cd online_store
- docker compose up --build
````
- HOW TO CREATE SUPERUSER
````
- docker compose run --rm app python manage.py createsuperuser 
````