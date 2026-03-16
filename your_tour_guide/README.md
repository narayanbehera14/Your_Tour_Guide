# YourTourGuide

A modern React-based tour guide application designed to help users explore Mumbai with confidence. Discover hand-picked hotels, local eateries, iconic beaches, museums, and more with insider tips, ratings, and easy navigation.

## Features

- **Explore Mumbai**: Browse curated lists of places including beaches, hotels, restaurants, museums, stadiums, and resorts
- **Search & Filter**: Find places by location (Mumbai, Chennai, Delhi, Jaipur, Pune) and category
- **Detailed Information**: View ratings, descriptions, and images for each place
- **User Authentication**: Sign in and sign up functionality
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-tour-guide.git
   cd your-tour-guide
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

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
src/
├── api/
│   └── places.js          # Static data for places
├── assets/                # Images and media files
├── components/
│   ├── About_us.jsx       # About us component
│   ├── Footer.jsx         # Footer component
│   ├── Header.jsx         # Header component
│   └── PlaceDetail.jsx    # Detailed view for places
├── pages/
│   ├── Home.jsx           # Main exploration page
│   ├── LandingPage.jsx    # Hero/landing page
│   ├── SignIn.jsx         # Sign in page
│   └── SignUp.jsx         # Sign up page
└── routes/
    └── AppRoutes.jsx      # Application routing
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and not licensed for public use.
