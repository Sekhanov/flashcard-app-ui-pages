# Flashcard App UI

A modern, multilingual flashcard learning application built with React, TypeScript, and Vite.  
Study and master new concepts through interactive flashcard sets with support for multiple languages and text-to-speech functionality.

## Features

- **User Authentication**: Secure login and registration with JWT token-based authentication
- **Flashcard Sets**: Create, edit, and manage custom flashcard sets
- **Interactive Learning**: Multiple study modes including flip cards and multiple-choice questions
- **Text-to-Speech**: Built-in audio pronunciation support for better learning
- **Multilingual Support**: Full i18n support with English and Russian translations
- **Responsive Design**: Beautiful Material-UI based interface that works on all devices
- **Cookie-based Session Management**: Persistent user sessions across browser sessions
- **Auto Token Refresh**: Automatic JWT token renewal for seamless user experience

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **UI Library**: Material-UI (MUI) 7
- **Routing**: React Router DOM 7
- **Internationalization**: i18next with React i18n
- **Styling**: Emotion CSS-in-JS + Vanilla Extract
- **HTTP Client**: Axios (via custom httpClient)
- **Authentication**: JWT with js-cookie for token storage
- **Code Quality**: ESLint with TypeScript support

## Project Structure

```
src/
├── api/                 # API endpoints and HTTP client
├── components/          # React components (pages, forms, cards)
├── Constants/          # Application constants (URLs, keyboard shortcuts)
├── hooks/              # Custom React hooks
├── locales/            # i18n translation files (EN, RU)
├── services/           # Utility services (text-to-speech)
├── types/              # TypeScript type definitions
├── utils/              # Helper utilities (auth, cookies, tokens)
├── App.tsx             # Main app component
├── i18n.ts             # i18n configuration
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (14.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd flashcard-app-ui
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with:
```
VITE_API_URL=http://localhost:8080
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the application for production:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality with ESLint:
```bash
npm run lint
```

## Key Components

- **AuthProvider.tsx**: Context provider for managing authentication state
- **LoginPage.tsx / RegisterPage.tsx**: User authentication pages
- **Home.tsx**: Dashboard for logged-in users
- **Library.tsx**: Browse and manage flashcard sets
- **FlashcardSet.tsx**: Study mode with interactive flashcards
- **CardFlipper.tsx**: Interactive card flip animation
- **MultipleChoice.tsx**: Multiple-choice question mode
- **WriteTerm.tsx**: Written answer input mode

## API Integration

The app communicates with a backend API through:
- **authentication.ts**: Login, registration, token refresh
- **flashcardSet.ts**: CRUD operations for flashcard sets
- **user.ts**: User profile management
- **httpClient.ts**: Centralized HTTP client with automatic token handling

## Authentication Flow

1. User logs in or registers
2. Backend returns JWT tokens (access + refresh)
3. Tokens stored securely in cookies
4. Automatic token refresh on expiration
5. Private routes protected by `PrivateRoute` component

## Internationalization

Supported languages:
- **English** (en) - Default
- **Russian** (ru)

Language detection is automatic based on browser locale. Users can toggle language in the UI.

## Docker Support

Build and run the application in Docker:
```bash
docker build -t flashcard-app-ui .
docker run -p 3000:3000 flashcard-app-ui
```
