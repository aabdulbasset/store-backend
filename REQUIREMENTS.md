# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

-----
## API Endpoints

## Products
__Index__ 

```http
GET /products/
```

__Show__
```http
GET /products/id/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

__Create [token required]__
```http
POST /products/create
```
| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. ADMIN Authorization token |

_Requests must be made with json type_

| Request body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of product to create |
| `price`     | `number` | **Required**. Price of product |
| `category`  | `number` | **Required**. category of the product to create |

__[OPTIONAL] Top 5 most popular products__ 

__[OPTIONAL] Products by category (args: product category)__
```http
GET /products/category/${id}
```

-----
## Users

__Index [token required]__
```http
GET /users/
```

| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**.Authorization token |

__Show [token required]__
```http
GET /users/id/${id}
```
| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Authorization token |


__Create N[token required]__
```http
POST /users/create
```

| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**.ADMIN Authorization token |

| Request body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstname`      | `string` | **Required**. Name of product to create |
| `lastname`     | `string` | **Required**. Price of product |
| `password`  | `string` | **Required**. category of the product to create |

-----
## Orders
__Current Order by user (args: user id)[token required]__
```http
GET /orders/${id}/current
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of user to fetch orders|

| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**.ADMIN Authorization token |

__[OPTIONAL] Completed Orders by user (args: user id)[token required]__
```http
GET /orders/${id}/complete
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of user to fetch orders|

| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**.ADMIN Authorization token |
-----
## Data Shapes
#### Product
| id | Name     | Price| Category |  
| :-------- | :------- | :----------- | :----
| `unique key`      | `string` | `number`| `number`
-  id
- name
- price
- [OPTIONAL] category
---
#### User
| id | FirstName     | LastName| Password |  
| :-------- | :------- | :----------- | :----
| `unique key`      | `string` | `string`| `hashed string`
- id
- firstName
- lastName
- password
----
#### Orders
| id | user_id     | status| 
| :-------- | :------- | :----------- | 
| `unique key`      | `number` | `boolean`| 
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
---
#### Orders Products
| order_id | product_id     | 
| :-------- | :------- | 
| `foreign key`      | `foreign key` |