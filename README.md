
# URL Shortener App

#### Video Demo:  



https://github.com/user-attachments/assets/1e3a6e9f-3e65-4b8a-ad50-0e6f1c256fa4



#### Description:

A full-stack URL shortener application built with React, TypeScript, Node.js, Express, and MongoDB. This application allows users to create shortened URLs and provides analytics tracking for each shortened link.

## 🏗️ Architecture

This project is organized as a monorepo with two main components:

- **[server/](server/)** - Backend API built with Node.js, Express, and MongoDB
- **[ui/](ui/)** - Frontend React application with TypeScript and Chakra UI

## ✨ Features

- ✅ Shorten long URLs into compact, shareable links
- ✅ Automatic redirect handling
- ✅ Analytics tracking for URL visits
- ✅ Beautiful, responsive user interface
- ✅ RESTful API with validation
- ✅ Docker containerization ready
- ✅ Production deployment configuration

## 🚀 Quick Start

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerized deployment)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ulr-shortenerapp
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Setup Frontend** (in a new terminal)
   ```bash
   cd ui
   npm install
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## 📁 Project Structure

```
ulr-shortenerapp/
├── server/                 # Backend application
│   ├── src/
│   │   ├── controller/     # Route controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── schemas/        # Validation schemas
│   │   └── middleware/     # Custom middleware
│   ├── config/            # Configuration files
│   └── build/             # Compiled JavaScript
├── ui/                    # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── containers/    # Page containers
│   │   └── config/        # Configuration
│   └── public/            # Static assets
└── deploy.sh              # Deployment script
```

## 🔧 API Endpoints

### Core Endpoints

- `POST /api/url` - Create a shortened URL
- `GET /:shortId` - Redirect to original URL
- `GET /api/url/:shortId` - Get URL details
- `GET /api/analytics` - Get analytics data
- `GET /healthcheck` - Health check endpoint

### Example Usage

**Create Short URL:**
```bash
curl -X POST http://localhost:4000/api/url \
  -H "Content-Type: application/json" \
  -d '{"destination": "https://example.com"}'
```

**Response:**
```json
{
  "_id": "...",
  "shortId": "abc123",
  "destination": "https://example.com"
}
```

## 🛠️ Configuration

### Backend Configuration

The server uses [config](https://www.npmjs.com/package/config) for environment-based configuration:

- **Development:** [`server/config/default.ts`](server/config/default.ts)
- **Production:** [`server/config/production.ts`](server/config/production.ts)
- **Environment Variables:** [`server/config/custom-environment-variables.ts`](server/config/custom-environment-variables.ts)

### Environment Variables

Create a `.env` file in the server directory:

```env
PORT=4000
DB_URI=mongodb://localhost:27017/url-shortener
CORS_ORIGIN=http://localhost:3000
```

### Frontend Configuration

Frontend configuration is handled in [`ui/src/config/index.ts`](ui/src/config/index.ts):

```typescript
export const SERVER_ENDPOINTS = 
  process.env.REACT_APP_SERVER_ENDPOINT || "http://localhost:4000";
```

## 🐳 Docker Deployment

### Local Development with Docker

```bash
cd server
docker-compose up -d
```

### Production Deployment

```bash
./deploy.sh
```

The deployment script will:
1. Pull latest code from git
2. Build and start the Docker containers
3. Configure reverse proxy with Caddy

## 📊 Analytics

The application tracks analytics for each shortened URL visit. Analytics data includes:

- Timestamp of each visit
- Reference to the shortened URL
- Automatic timestamping via MongoDB

Access analytics via the [`getAnalytics`](server/src/controller/shortUrl.controller.ts) endpoint.

## 🧪 Testing

### Backend Tests
```bash
cd server
npm test
```

### Frontend Tests
```bash
cd ui
npm test
```

## 🚀 Production Deployment

The application is configured for production deployment with:

- **Docker containerization** via [`server/Dockerfile`](server/Dockerfile)
- **Reverse proxy** with Caddy ([`server/Caddyfile`](server/Caddyfile))
- **Process management** with PM2 ([`server/process.json`](server/process.json))
- **Automated deployment** via [`deploy.sh`](deploy.sh)

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for detailed deployment instructions.

## 🛡️ Security Features

- URL validation using Yup schemas
- CORS configuration
- Input sanitization
- MongoDB injection protection

## 🔗 Key Dependencies

### Backend
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database and ODM
- **nanoid** - URL ID generation
- **Yup** - Schema validation
- **config** - Configuration management

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Chakra UI** - Component library
- **React Router** - Client-side routing
- **Axios** - HTTP client

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 API Documentation

For detailed API documentation, see the route definitions in [`server/src/routes/index.ts`](server/src/routes/index.ts) and controller implementations in [`server/src/controller/shortUrl.controller.ts`](server/src/controller/shortUrl.controller.ts).
