# Mini Project

[json-server-jwt](https://github.com/dibimbing-react-student/json-server-jwt.git)

## List of Library that used in this Project

1.  **axios: 0.27.2**
2.  **bootstrap: 5.1.3**
3.  **js-cookie: 3.0.1**
4.  **node-sass: 7.0.1**
5.  **react: 18.1.0**
6.  **react-bootstrap: 2.4.0**
7.  **react-dom: 18.1.0**
8.  **react-loading: 2.0.3**
9.  **react-router-dom: 6.3.0**
10. **react-scripts: 5.0.1**
11. **react-tsparticles: 2.0.6**
12. **sweetalert: 2.1.2**
13. **tsparticles: 2.0.6**

# POST /register

Creates a new User and returns the new object.

- **URL Params**
  None
- **Headers**
  Content-Type: application/json
- **Data Params**
  {

  name: string,
  address: string,
  phone_number: integer,
  password: string
  }

- **Success Response:**
- **Code:** 200
- **Content:** {
  [
  { <success: 1> }
  { <data: results> }
  ]
  }

# POST/Login

- **URL Params**
  None
- **Headers**
  Content-Type: application/json
- **Data Params**
  {

  name: string,

  password: string
  }

- **Success Response:**
- **Code:** 200
-

# Products

- **Product object**
  {
  id: integer
  name: string
  cost: float(2)
  quantity: integer

  }

# GET /products

Returns all products in the system.

- **URL Params**
  None
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
- **Authorization:** Bearer <OAuth Token>
- **Success Response:**
- **Code:** 200
  **Content:**
  {
  products: [
  {<product_id>},
  {<product_name>},
  {<product_quantity>}
  {<product_price>}
  ]
  }

# GET /products/auth/:id

Returns the specified product.

- **URL Params**
  Required: id=[integer]
- **Data Params**
  None
- **Headers**
  Content-Type: application/json
  Authorization: Bearer <OAuth Token>
- **Success Response:**
- **Code:** 200
- **Content:**{
  [
  { <product_id> }
  { <product_name> }
  { <product_quantity> }
  { <product_price> }
  ]
  }

# POST /products

Creates a new Product and returns the new object.

- **URL Params**
  None
- **Data Params**
  {
  name: string
  quantity: integer
  price: integer
  }
- **Headers**
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
- **Content:** { <product_object> }

# PATCH /products

Updates fields on the specified product and returns the updated object.

- **URL Params**
  Required: none
  Data Params
  {
  id : int
  name: string
  cost: float(2)
  available_quantity: integer
  }
- **Headers**
  Content-Type: application/json
  Authorization: Bearer <Auth Token>
- **Success Response:**
- **Code:** 200
- **Content:** { <product_object> }

# DELETE /products/

Deletes the specified product.

- **URL Params**
  Required: none
  Data Params
  {
  id : int
  }
- **Headers**
  Content-Type: application/json
  Authorization: Bearer <OAuth Token>
- **Success Response:**
  **Code:** 204
