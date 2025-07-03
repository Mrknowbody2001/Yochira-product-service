# Product Service

This service provides REST API endpoints to manage products.

## Available Endpoints

- `GET /api/product/new-id`  
  Generate a new unique product ID.

- `POST /api/product/create`  
  Create a new product. Validates input data.

- `PUT /api/product/update/:id`  
  Update an existing product by ID. Validates input data.

- `DELETE /api/product/delete/:id`  
  Delete a product by ID.

- `GET /api/product/`  
  Get all products.

- `GET /api/product/:id`  
  Get a single product by ID.

---

## Note

This service is **still under development** and may have changes in API and features.
