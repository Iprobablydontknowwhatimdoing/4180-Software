---
title: Installation Guide
description: Set up 4180 Software on your system
---

This guide walks you through setting up 4180 Software in your environment.

## System Requirements

Before you begin, ensure you have:

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or Yarn/pnpm)
- **Git** for version control
- 2GB of free disk space

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Iprobablydontknowwhatimdoing/4180-software.git
cd 4180-software
```

### 2. Install Dependencies

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### 3. Configure Environment

Copy the example environment file and configure as needed:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
API_URL=http://localhost:3000
LOG_LEVEL=info
```

### 4. Verify Installation

Run the verification script:

```bash
npm run verify
```

You should see output confirming all dependencies are installed correctly.

## Troubleshooting

### Node Version Issues

If you get Node version errors:

```bash
node --version
```

Make sure you have Node 18+ installed. Use **nvm** or **fnm** to manage versions.

### Dependency Conflicts

Clear the node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

If port 3000 is in use, change it:

```bash
PORT=3001 npm start
```

## Next Steps

- [Quick Start Guide](./quickstart) - Build your first project
- [Configuration Reference](../reference/configuration) - Deep dive into settings
- [API Documentation](../reference/api) - Explore available endpoints

## Getting Help

If you encounter issues not covered here:

1. Check the [FAQ](../reference/faq)
2. Search for similar issues on [GitHub](https://github.com/Iprobablydontknowwhatimdoing/4180-software/issues)
3. Open a new issue with details about your setup
