# YourTourGuide

A full-stack web application designed as a comprehensive tour guide for travelers exploring cities like Mumbai. The app provides detailed information on various attractions, including beaches, hotels, restaurants, museums, stadiums, and resorts. Users can browse curated lists, view ratings, descriptions, and images, and navigate seamlessly with user authentication features.

## Screenshots

Here are some screenshots of the YourTourGuide application:

### Landing Page
![Landing Page](c:\Users\nbehe\AppData\Local\Packages\MicrosoftWindows.Client.Core_cw5n1h2txyewy\TempState\ScreenClip\{6D98376C-DAD2-4088-9CC9-D9979786AA2B}.png)
*The hero section introducing the app and its features.*

### Home Page
![Home Page](c:\Users\nbehe\AppData\Local\Packages\MicrosoftWindows.Client.Core_cw5n1h2txyewy\TempState\ScreenClip\{0ACE1663-2077-4684-9CEF-E38539DE400D}.png)
*The main exploration page with place listings and filters.*

### Place Detail View
![Place Detail](c:\Users\nbehe\AppData\Local\Packages\MicrosoftWindows.Client.Core_cw5n1h2txyewy\TempState\ScreenClip\{37F7789A-E6E3-47E9-9E61-F2536975B406}.png)
*Detailed view of a selected place, including ratings and description.*

### Sign-In Page
![Sign-In](c:\Users\nbehe\AppData\Local\Packages\MicrosoftWindows.Client.Core_cw5n1h2txyewy\TempState\ScreenClip\{09C40E58-D572-4AAD-BD47-68E3F6377EE6}.png)
*User authentication page for signing in.*

### Mobile View
![Mobile View](c:\Users\nbehe\AppData\Local\Packages\MicrosoftWindows.Client.Core_cw5n1h2txyewy\TempState\ScreenClip\{9E35B5EE-29DB-4175-8187-FC6CC1A932CB}.png)
*Responsive design optimized for mobile devices.*

*Note: Screenshots are stored in the `screenshots/` folder. To add or update images, take screenshots of your running app (e.g., using browser dev tools or screenshot tools), save them as PNG/JPG in this folder, and ensure the paths in the markdown above match the filenames.*

## Tech Stack

### Frontend
- **React 18**: Component-based UI library for building interactive interfaces.
- **Vite**: Fast build tool and development server for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **React Router DOM**: Client-side routing for single-page application navigation.
- **Axios**: HTTP client for making API requests.
- **React Icons**: Icon library for UI elements.
- **ESLint**: Linting tool for code quality and consistency.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing place data and user information.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **CORS**: Middleware for handling cross-origin requests.
- **Cookie Parser**: Middleware for parsing cookies.
- **Dotenv**: Environment variable management.
- **Nodemon**: Development tool for auto-restarting the server on changes.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- Git

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/narayanbehera14/Your_Tour_Guide.git
   cd Your_Tour_Guide/your_tour_guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend root with the following variables:
   ```
   PORT=3000
   MONGODBDATA=mongodb://localhost:27017/  # Or your MongoDB connection string
   CORS=http://localhost:5173  # Frontend URL for CORS
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will run on [http://localhost:3000](http://localhost:3000).

## Available Scripts

### Frontend
- `npm run dev` - Start the Vite development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

### Backend
- `npm run dev` - Start the server with Nodemon (auto-restart on changes)

## Project Structure

```
YourTourGuide/
├── backend/                          # Backend Node.js application
│   ├── package.json                  # Backend dependencies and scripts
│   └── src/
│       ├── app.js                    # Express app configuration (CORS, middleware)
│       ├── index.js                  # Server entry point (connects DB, starts server)
│       ├── Constance.js              # Constants (e.g., DB name)
│       ├── configs/
│       │   └── mongdb.js             # MongoDB connection setup
│       ├── controller/               # (Empty) API controllers for business logic
│       ├── models/                   # (Empty) Mongoose models for data schemas
│       ├── routes/                   # (Empty) API route definitions
│       └── utils/                    # (Empty) Utility functions
└── your_tour_guide/                  # Frontend React application
    ├── package.json                  # Frontend dependencies and scripts
    ├── vite.config.js                # Vite configuration
    ├── tailwind.config.js            # Tailwind CSS configuration
    ├── postcss.config.js             # PostCSS configuration
    ├── eslint.config.js              # ESLint configuration
    ├── vercel.json                   # Vercel deployment config
    ├── index.html                    # Main HTML file
    ├── public/                       # Static assets
    ├── screenshots/                  # Screenshots of the website
    └── src/
        ├── main.jsx                  # React app entry point
        ├── App.jsx                   # Main app component (Header, Routes, Footer)
        ├── App.css                   # Global styles
        ├── index.css                 # Tailwind imports and base styles
        ├── api/
        │   └── places.js             # Static data array for places (images, details)
        ├── assets/                   # Image files for places
        ├── components/
        │   ├── Header.jsx            # Navigation header
        │   ├── Footer.jsx            # Site footer
        │   ├── About_us.jsx          # About page component
        │   └── PlaceDetail.jsx       # Detailed view for individual places
        ├── pages/
        │   ├── LandingPage.jsx       # Hero/landing page
        │   ├── Home.jsx              # Main exploration page with filters
        │   ├── SignIn.jsx            # User sign-in form
        │   ├── SignUp.jsx            # User sign-up form
        │   ├── Beach.jsx             # Beach category page
        │   ├── Food.jsx              # Food/restaurant category page
        │   ├── Hotel.jsx             # Hotel category page
        │   ├── Museum.jsx            # Museum category page
        │   ├── Resort.jsx            # Resort category page
        │   ├── Restaurant.jsx        # Restaurant category page
        │   └── Stadium.jsx           # Stadium category page
        └── routes/
            └── AppRoutes.jsx         # React Router route definitions
```

## File Analysis and Explanations

### Backend Files
- **src/index.js**: The entry point for the backend server. It loads environment variables, connects to MongoDB, and starts the Express server on the specified port (default 3000). Handles connection errors gracefully.
- **src/app.js**: Configures the Express application. Sets up CORS for cross-origin requests, serves static files, parses cookies and JSON bodies, and defines a basic root route returning "Hello World".
- **src/Constance.js**: A simple constants file exporting the MongoDB database name ("places").
- **src/configs/mongdb.js**: Handles MongoDB connection using Mongoose. Reads the connection string from environment variables and logs success/failure.
- **controller/**, **models/**, **routes/**, **utils/**: These folders are currently empty but are structured for future expansion. Controllers would handle API logic, models define data schemas, routes define API endpoints, and utils contain helper functions.

### Frontend Files
- **src/main.jsx**: The entry point for the React app. Renders the App component into the DOM using React's createRoot.
- **src/App.jsx**: The root component that wraps the entire app. Includes the Header, AppRoutes (for navigation), and Footer components.
- **src/App.css**: Contains global CSS styles for the app.
- **src/index.css**: Imports Tailwind CSS and defines base styles.
- **src/api/places.js**: A static data file containing an array of place objects. Each object includes id, name, category, city, rating, description, and image. This serves as mock data for the frontend.
- **src/assets/**: Directory for image files used in the places data (e.g., juhu.jpg, taj-hotel.jpg).
- **components/Header.jsx**: Navigation bar component, likely including links to different pages and user auth.
- **components/Footer.jsx**: Footer component with site information or links.
- **components/About_us.jsx**: Component for the About Us page, describing the app or team.
- **components/PlaceDetail.jsx**: Displays detailed information for a selected place, accessed via dynamic routing (e.g., /place/:id).
- **pages/LandingPage.jsx**: The initial landing page with hero content to introduce the app.
- **pages/Home.jsx**: The main page for exploring places, probably with search/filter functionality.
- **pages/SignIn.jsx** & **pages/SignUp.jsx**: Forms for user authentication.
- **pages/Beach.jsx**, **Food.jsx**, etc.: Category-specific pages listing places in that category.
- **routes/AppRoutes.jsx**: Defines the routing structure using React Router, mapping paths to components.
- **vite.config.js**: Configuration for Vite, including plugins like React.
- **tailwind.config.js**: Tailwind CSS configuration for custom themes or utilities.
- **postcss.config.js**: PostCSS setup for processing CSS.
- **eslint.config.js**: ESLint rules for code linting.
- **vercel.json**: Deployment configuration for Vercel hosting.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Ensure code follows the established linting rules and includes tests where applicable.

## License

This project is private and not licensed for public use.
