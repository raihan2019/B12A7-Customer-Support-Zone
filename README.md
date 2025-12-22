# 🎯 B12A7 - Customer Support Zone

A modern React application built with Vite, featuring fast refresh and ESLint configuration for optimal development experience.

**Live Site:** [https://a7b12-customer-support-zone.netlify.app/]

**GitHub Repository:** [https://github.com/raihan2019/B12A7-Customer-Support-Zone.git]

---
## ✨ Key Features

- **Finding Customer Problem Easily**
- **Track the status of their Problem**
- **Concern about the Resolve status**



---

## 🛠️ Built With

### Core Technologies
- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend build tool
- **ESLint** - Code linting and quality assurance

### Build Tools
- **@vitejs/plugin-react** - Official React plugin for Vite with Babel for Fast Refresh
- **Vite HMR** - Hot Module Replacement for instant updates during development

---

## 📦 Package Manager

This project supports multiple package managers. You can use any of the following:

- **npm** (Node Package Manager) - Default package manager
- **yarn** - Fast, reliable package manager
- **pnpm** - Efficient disk space usage

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your PC:

### Required Software
- **Node.js** (v14.18+ or v16+) - [Download here](https://nodejs.org/)
  - Check version: `node --version`
- **npm** (comes with Node.js)
  - Check version: `npm --version`
- **Git** - [Download here](https://git-scm.com/)
  - Check version: `git --version`

### Optional Package Managers
- **yarn** (optional): `npm install -g yarn`
- **pnpm** (optional): `npm install -g pnpm`

---

## 🚀 Installation Steps

### Step 1: Clone the Repository

```bash
git clone 
```

### Step 2: Navigate to Project Directory

```bash
cd B12A7-Customer-Support-Zone
```

### Step 3: Install Dependencies

Choose your preferred package manager:

#### Using npm (Recommended)
```bash
npm install
```

#### Using yarn
```bash
yarn install
```

#### Using pnpm
```bash
pnpm install
```

---

## 📦 Dependencies

After installation, the following packages will be installed in your `node_modules` folder:

### Production Dependencies

These are required for the application to run:

- **react** - Core React library
- **react-dom** - React DOM rendering

### Development Dependencies (devDependencies)

These are used during development only:

- **@vitejs/plugin-react** - Vite plugin for React support
- **@types/react** - TypeScript definitions for React
- **@types/react-dom** - TypeScript definitions for React DOM
- **eslint** - JavaScript linting utility
- **eslint-plugin-react** - React specific linting rules
- **eslint-plugin-react-hooks** - Linting rules for React Hooks
- **eslint-plugin-react-refresh** - ESLint plugin for React Fast Refresh
- **vite** - Build tool and development server

---

## 🎮 Available Scripts

After installation, you can run the following commands:

### Start Development Server

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

Using pnpm:
```bash
pnpm dev
```

**Output:** Application will run at `http://localhost:5173`

### Build for Production

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

Using pnpm:
```bash
pnpm build
```

**Output:** Production files will be generated in the `dist/` folder

### Preview Production Build

Using npm:
```bash
npm run preview
```

Using yarn:
```bash
yarn preview
```

Using pnpm:
```bash
pnpm preview
```

### Run Linting

Using npm:
```bash
npm run lint
```

Using yarn:
```bash
yarn lint
```

Using pnpm:
```bash
pnpm lint
```

---

## 📁 Project Structure

```
B12A7-Customer-Support-Zone/
├── node_modules/          # Installed dependencies (auto-generated)
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # React components
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore rules
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Dependency lock file (npm)
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## 🔧 Configuration Files

### package.json

Contains:
- **name**: Project name
- **version**: Current version
- **type**: Module type (ESM)
- **scripts**: Available npm scripts
- **dependencies**: Production packages
- **devDependencies**: Development-only packages

### vite.config.js

Configures:
- React plugin setup
- Build options
- Development server settings
- HMR (Hot Module Replacement)

### .eslintrc.cjs

Defines:
- Code quality rules
- React-specific linting
- Hook rules for React
- Code style enforcement

---

## 🌐 Browser Compatibility

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue 1: `npm install` fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

#### Issue 2: Port 5173 already in use
**Solution:**
- Close other applications using the port, or
- Vite will automatically use the next available port

#### Issue 3: ESLint errors
**Solution:**
```bash
# Run auto-fix
npm run lint -- --fix
```

#### Issue 4: Module not found errors
**Solution:**
```bash
# Verify all dependencies are installed
npm install

# Check if you're in the correct directory
pwd
```

---

## 📚 Understanding Dependencies vs DevDependencies

### Dependencies (Production)
Packages required for your app to **run in production**:
```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-dom": "^18.x.x"
  }
}
```

### DevDependencies (Development)
Packages required only during **development and building**:
```json
{
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x.x",
    "eslint": "^8.x.x",
    "vite": "^5.x.x"
  }
}
```

---

## 🎯 What Happens During `npm install`?

1. **Reads package.json** - Checks all required packages
2. **Downloads packages** - Fetches from npm registry
3. **Installs in node_modules/** - Creates folder with all dependencies
4. **Creates package-lock.json** - Locks exact versions
5. **Runs post-install scripts** - If any are defined

---

## 🚀 Deployment

This project is deployed on **Netlify**. To deploy your own:

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to Netlify
   - Drag and drop to [Netlify Drop](https://app.netlify.com/drop)
   - Or use Netlify CLI

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is available for educational purposes.

---

## 💡 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

⭐️ If you find this project helpful, please give it a star on GitHub!

## 🔍 Quick Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
