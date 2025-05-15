# Bakery App
This online bakery app list all the different bakery products and customers can select them and order multiple products. 

Cart Behaviour :
Users can add products to the cart, and duplicate entries are prevented — only the quantity increases on adding same products multiple times.

Stock Management : 
If in any case the stock is empty then Customer is prevented from ordering.  Both on the product card and in the cart, I enforce stock limits: if a user tries to exceed available stock (e.g., 12 items stock limit), a message is shown, and the increment button is disabled. Similarly, quantity can’t be decreased below 1. 

Search Functionality:
Users can also search products (Debounced Search, Multi Word search(Example: cup cake, pan cake) and singular/plural search (cake or cakes)) possible.

The application is fully responsive on Desktop, Laptop, Tablet and mobile devices.

Planned Enhancements:
1. Pagination for large sets of bakery items. 
2. Filter products based on price and Fuzzy Search using Fuse.js.
3. Persist the store so that the order items persist after page refresh
4. Ability to delete products from the cart.
5. Technical improvements, such as integration with React Query.

**Prerequisites**
(node version 20+)

## Setup and run server

- cd CakeShop
- npm i
- npm start

## Setup and run frontend

- cd CakeShop/client
- npm i
- npm start

- 
## Tech Stack
- React,
- Redux Toolkit
- TypeScript
- Bootstrap
- SCCS for styling
- Express Js
