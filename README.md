# Bakery App
The online bakery app lists a variety of bakery products for customers to browse
Customers can select and order multiple products from the catalog.
**Out-of-stock prevention: **If an item is out of stock, customers are prevented from placing an order for it.
**Cart behavior:**
Users can add products to their cart.
Duplicate entries are not allowed — adding the same product again increases its quantity instead.
**Stock limits enforced:**
Quantity cannot exceed the available stock (e.g., 12 items).
If a user tries to exceed stock, an appropriate message is shown and the increment button is disabled.
Minimum quantity limit: Quantity cannot be reduced below 1.
****Search functionality:**
**
Supports multi-word search.

Handles both singular and plural forms (e.g., "cake" and "cakes").
**Planned Enhancements:**
1. Pagination for large sets of bakery items. 

2. Filter products based on price.
3. Persist the store so that the order items persist after page refresh

4. Ability to delete products from the order.

5. Technical improvements, such as integration with React Query.

Prerequisites
(node version 20+)

## Tech Stack

- React,
- Redux Toolkit
- TypeScript
- Bootstrap
- SCCS for styling
- Express Js

## Setup and run server

- cd CakeShop
- npm i
- npm start

## Setup and run frontend

- cd CakeShop/client
- npm i
- npm start
