---
title: "Building RESTful APIs with Node.js and Express: Complete Guide"
description: "Learn how to design and build production-ready RESTful APIs using Node.js and Express. Covers authentication, validation, error handling, testing, and deployment best practices."
date: "2024-12-10"
readTime: "12 min read"
category: "Backend Development"
tags: ["Node.js", "Express", "API", "REST", "Backend"]
featured: true
author: "Kalki Eshwar D"
---

# Building RESTful APIs with Node.js and Express: Complete Guide

Building robust RESTful APIs is a crucial skill for modern web development. Node.js with Express provides an excellent foundation for creating scalable and maintainable APIs. This comprehensive guide will walk you through everything you need to know to build production-ready APIs.

## Table of Contents

1. [Setting Up the Project](#setting-up-the-project)
2. [API Design Principles](#api-design-principles)
3. [Express Application Structure](#express-application-structure)
4. [Middleware and Error Handling](#middleware-and-error-handling)
5. [Authentication and Authorization](#authentication-and-authorization)
6. [Data Validation](#data-validation)
7. [Database Integration](#database-integration)
8. [Testing Strategies](#testing-strategies)
9. [Security Best Practices](#security-best-practices)
10. [Deployment and Monitoring](#deployment-and-monitoring)

## Setting Up the Project

Let's start by setting up a new Node.js project with all necessary dependencies.

### Initial Setup

```bash
mkdir todo-api
cd todo-api
npm init -y

# Install dependencies
npm install express mongoose dotenv cors helmet morgan
npm install --save-dev nodemon jest supertest eslint prettier
```

### Project Structure

```
todo-api/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
├── tests/
├── .env
├── .gitignore
└── server.js
```

### Basic Server Setup

```javascript
// server.js
const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## API Design Principles

### RESTful Resource Design

Follow REST conventions for URL structure and HTTP methods:

```javascript
// Good REST API design
GET    /api/users          // Get all users
GET    /api/users/:id      // Get specific user
POST   /api/users          // Create new user
PUT    /api/users/:id      // Update entire user
PATCH  /api/users/:id      // Partial update user
DELETE /api/users/:id      // Delete user

// Nested resources
GET    /api/users/:id/todos     // Get user's todos
POST   /api/users/:id/todos     // Create todo for user
```

### API Versioning

```javascript
// URL versioning
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Header versioning
app.use((req, res, next) => {
  const version = req.headers['api-version'] || 'v1';
  req.apiVersion = version;
  next();
});
```

### Response Format Standards

```javascript
// Success response format
{
  "success": true,
  "data": {
    "user": {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com"
    }
  },
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}

// Error response format
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

## Express Application Structure

### Main Application File

```javascript
// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todos');

const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Logging
app.use(morgan('combined'));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
```

### Route Organization

```javascript
// src/routes/todos.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validation');
const { todoSchema, updateTodoSchema } = require('../utils/validators');

// Apply authentication to all routes
router.use(auth);

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', validate(todoSchema), todoController.createTodo);
router.put('/:id', validate(updateTodoSchema), todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
```

### Controller Pattern

```javascript
// src/controllers/todoController.js
const Todo = require('../models/Todo');
const { asyncHandler } = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const getAllTodos = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    sortOrder = 'desc',
    status,
    search
  } = req.query;

  const filter = { userId: req.user.id };
  
  if (status) {
    filter.status = status;
  }
  
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  const skip = (page - 1) * limit;
  const sort = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

  const [todos, total] = await Promise.all([
    Todo.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .populate('category'),
    Todo.countDocuments(filter)
  ]);

  res.status(200).json({
    success: true,
    data: { todos },
    meta: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / limit)
    }
  });
});

const createTodo = asyncHandler(async (req, res) => {
  const todoData = {
    ...req.body,
    userId: req.user.id
  };

  const todo = await Todo.create(todoData);
  await todo.populate('category');

  res.status(201).json({
    success: true,
    data: { todo },
    message: 'Todo created successfully'
  });
});

const updateTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  const todo = await Todo.findOne({ _id: id, userId: req.user.id });
  
  if (!todo) {
    throw new ApiError(404, 'Todo not found');
  }

  Object.assign(todo, req.body);
  await todo.save();
  await todo.populate('category');

  res.status(200).json({
    success: true,
    data: { todo },
    message: 'Todo updated successfully'
  });
});

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  // ... other methods
};
```

## Middleware and Error Handling

### Custom Error Class

```javascript
// src/utils/ApiError.js
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
```

### Error Handler Middleware

```javascript
// src/middleware/errorHandler.js
const ApiError = require('../utils/ApiError');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new ApiError(404, message);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ApiError(400, message);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ApiError(400, message);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      code: error.statusCode || 500,
      message: error.message || 'Server Error'
    }
  });
};

module.exports = errorHandler;
```

### Async Handler Utility

```javascript
// src/utils/asyncHandler.js
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = { asyncHandler };
```

## Authentication and Authorization

### JWT Authentication Middleware

```javascript
// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const { asyncHandler } = require('../utils/asyncHandler');

const auth = asyncHandler(async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    throw new ApiError(401, 'Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      throw new ApiError(401, 'Invalid token');
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, 'Invalid token');
  }
});

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new ApiError(403, 'Access denied. Insufficient permissions.');
    }
    next();
  };
};

module.exports = { auth, authorize };
```

### Auth Controller

```javascript
// src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { asyncHandler } = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, 'User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  const token = generateToken(user._id);

  res.status(201).json({
    success: true,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    },
    message: 'User registered successfully'
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new ApiError(401, 'Invalid credentials');
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const token = generateToken(user._id);

  res.status(200).json({
    success: true,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    },
    message: 'Login successful'
  });
});

module.exports = { register, login };
```

## Data Validation

### Validation Middleware

```javascript
// src/middleware/validation.js
const Joi = require('joi');
const ApiError = require('../utils/ApiError');

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      throw new ApiError(400, errorMessage);
    }
    
    next();
  };
};

module.exports = validate;
```

### Validation Schemas

```javascript
// src/utils/validators.js
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const todoSchema = Joi.object({
  title: Joi.string().min(1).max(100).required(),
  description: Joi.string().max(500).optional(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').default('pending'),
  priority: Joi.string().valid('low', 'medium', 'high').default('medium'),
  dueDate: Joi.date().optional(),
  categoryId: Joi.string().optional()
});

const updateTodoSchema = Joi.object({
  title: Joi.string().min(1).max(100).optional(),
  description: Joi.string().max(500).optional(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
  priority: Joi.string().valid('low', 'medium', 'high').optional(),
  dueDate: Joi.date().optional(),
  categoryId: Joi.string().optional()
});

module.exports = {
  userSchema,
  todoSchema,
  updateTodoSchema
};
```

## Database Integration

### Mongoose Models

```javascript
// src/models/Todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: {
    type: Date
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
});

// Index for better query performance
todoSchema.index({ userId: 1, status: 1 });
todoSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Todo', todoSchema);
```

### Database Connection

```javascript
// src/config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## Testing Strategies

### Unit Tests

```javascript
// tests/unit/todoController.test.js
const request = require('supertest');
const app = require('../../src/app');
const Todo = require('../../src/models/Todo');
const User = require('../../src/models/User');

describe('Todo Controller', () => {
  let authToken;
  let userId;

  beforeEach(async () => {
    // Create test user and get auth token
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    
    userId = user._id;
    authToken = generateToken(userId);
  });

  afterEach(async () => {
    await Todo.deleteMany({});
    await User.deleteMany({});
  });

  describe('POST /api/todos', () => {
    it('should create a new todo', async () => {
      const todoData = {
        title: 'Test Todo',
        description: 'Test Description',
        status: 'pending'
      };

      const response = await request(app)
        .post('/api/todos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(todoData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.todo.title).toBe(todoData.title);
    });

    it('should return 400 if title is missing', async () => {
      const todoData = {
        description: 'Test Description'
      };

      const response = await request(app)
        .post('/api/todos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(todoData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });
});
```

### Integration Tests

```javascript
// tests/integration/todos.test.js
const request = require('supertest');
const app = require('../../src/app');

describe('Todos API Integration', () => {
  it('should handle complete todo workflow', async () => {
    // Register user
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };

    const registerResponse = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    const { token } = registerResponse.body.data;

    // Create todo
    const todoData = {
      title: 'Integration Test Todo',
      description: 'Testing complete workflow'
    };

    const createResponse = await request(app)
      .post('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .send(todoData)
      .expect(201);

    const todoId = createResponse.body.data.todo.id;

    // Get todos
    const getResponse = await request(app)
      .get('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(getResponse.body.data.todos).toHaveLength(1);

    // Update todo
    const updateData = { status: 'completed' };
    
    await request(app)
      .put(`/api/todos/${todoId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updateData)
      .expect(200);

    // Delete todo
    await request(app)
      .delete(`/api/todos/${todoId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});
```

## Security Best Practices

### Environment Configuration

```javascript
// .env
NODE_ENV=production
PORT=3000
MONGO_URI=mongodb://localhost:27017/todoapi
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### Security Middleware

```javascript
// src/middleware/security.js
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Rate limiting
const createRateLimit = (windowMs, max, message) => rateLimit({
  windowMs,
  max,
  message: { error: message },
  standardHeaders: true,
  legacyHeaders: false
});

// Speed limiting
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 5,
  delayMs: 500
});

// Security middleware setup
const setupSecurity = (app) => {
  // Data sanitization against NoSQL query injection
  app.use(mongoSanitize());

  // Data sanitization against XSS
  app.use(xss());

  // Prevent parameter pollution
  app.use(hpp());

  // Rate limiting
  app.use('/api/', createRateLimit(15 * 60 * 1000, 100, 'Too many requests'));
  app.use('/api/auth/', createRateLimit(15 * 60 * 1000, 5, 'Too many auth attempts'));

  // Speed limiting
  app.use('/api/', speedLimiter);
};

module.exports = setupSecurity;
```

## Deployment and Monitoring

### Production Configuration

```javascript
// src/config/production.js
const compression = require('compression');
const morgan = require('morgan');

const setupProduction = (app) => {
  // Enable compression
  app.use(compression());

  // Enhanced logging in production
  app.use(morgan('combined', {
    skip: (req, res) => res.statusCode < 400
  }));

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      env: process.env.NODE_ENV
    });
  });
};

module.exports = setupProduction;
```

### Docker Configuration

```dockerfile
# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongo:27017/todoapi
    depends_on:
      - mongo
    restart: unless-stopped

  mongo:
    image: mongo:5
    volumes:
      - mongo_data:/data/db
    restart: unless-stopped

volumes:
  mongo_data:
```

## Conclusion

Building production-ready RESTful APIs requires attention to many details: proper structure, error handling, security, testing, and deployment considerations. This guide provides a solid foundation, but remember to:

1. Always validate and sanitize input data
2. Implement proper error handling and logging
3. Use authentication and authorization appropriately
4. Write comprehensive tests
5. Monitor your API in production
6. Keep dependencies updated
7. Follow security best practices

The patterns and practices shown here will help you build APIs that are maintainable, scalable, and secure.

---

*Ready to build your own API? Start with this foundation and adapt it to your specific needs. For more backend development insights, connect with me on [LinkedIn](https://linkedin.com/in/kalkieshward).*
