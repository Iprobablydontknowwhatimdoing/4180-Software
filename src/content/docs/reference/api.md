---
title: API Reference
description: Complete API documentation for 4180 Software
---

Complete reference for all available APIs in 4180 Software.

## Authentication

All API endpoints require authentication using an API key:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.example.com/v1/endpoint
```

## Endpoints

### Core Endpoints

#### GET `/api/v1/modules`

Retrieve all available modules.

**Parameters:**

- `limit` (optional) - Maximum results to return (default: 50)
- `offset` (optional) - Pagination offset (default: 0)

**Response:**

```json
{
  "modules": [
    {
      "id": "core-module",
      "name": "Core Module",
      "version": "1.0.0",
      "enabled": true
    }
  ],
  "total": 1
}
```

#### POST `/api/v1/modules`

Create a new module.

**Request Body:**

```json
{
  "name": "My Module",
  "description": "A custom module",
  "version": "0.1.0"
}
```

**Response:** `201 Created`

```json
{
  "id": "my-module",
  "name": "My Module",
  "created_at": "2024-01-15T10:30:00Z"
}
```

#### GET `/api/v1/modules/{id}`

Retrieve a specific module.

**Response:**

```json
{
  "id": "my-module",
  "name": "My Module",
  "description": "A custom module",
  "version": "0.1.0",
  "enabled": true,
  "config": {}
}
```

#### PUT `/api/v1/modules/{id}`

Update a module configuration.

**Request Body:**

```json
{
  "enabled": true,
  "config": {
    "setting": "value"
  }
}
```

#### DELETE `/api/v1/modules/{id}`

Delete a module.

**Response:** `204 No Content`

## Error Response

All errors follow this format:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Request validation failed",
    "details": [
      {
        "field": "name",
        "message": "Name is required"
      }
    ]
  }
}
```

## Rate Limiting

API requests are rate limited:

- **Limit:** 1000 requests per hour
- **Headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

## Pagination

List endpoints support pagination:

```bash
GET /api/v1/modules?limit=25&offset=50
```

Response includes:

```json
{
  "data": [...],
  "pagination": {
    "limit": 25,
    "offset": 50,
    "total": 150,
    "has_more": true
  }
}
```

---

For more details, see the [Guide to API Integration](../guides/api-integration).
