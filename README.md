# 🌍 WorldRank

A modern React application for exploring countries around the world,
built as a hands-on project to practice data fetching, state management,
routing, responsive UI, and reusable React architecture.

## ✨ Features

- 🌎 Browse countries from around the world
- 🔎 Search countries by name
- 🌐 Filter countries by region
- ↕️ Sort country results
- 📄 View detailed information for each country
- 🗺️ Explore neighboring countries
- 🌙 Dark mode with persisted user preference
- ⚡ Fast data fetching and caching with TanStack Query
- 💀 Skeleton loading states for a smoother experience
- 📱 Responsive layout for mobile, tablet, and desktop
- 🧭 Client-side navigation with React Router
- 🧠 Global state management with Redux Toolkit
- 💾 Local storage support for persistent UI preferences

## 🛠️ Built With

Technology Purpose

---

React UI development
Vite Development server and build tooling
Tailwind CSS Styling and responsive design
TanStack Query Server-state management, caching, and data fetching
Redux Toolkit Global client-state management
React Router Application routing
React Icons Icons
React Spinners Loading indicators
REST Countries API Country data

## 📁 Project Structure

```text
src/
├── context/
│   ├── countriesSlice.js
│   └── store.js
│
├── features/
│   ├── countries/
│   │   ├── ContainerCountries.jsx
│   │   ├── CountriesItem.jsx
│   │   ├── CountriesOperation.jsx
│   │   ├── CountriesTable.jsx
│   │   ├── RegionButtons.jsx
│   │   ├── SearchCountries.jsx
│   │   └── SortBy.jsx
│   │
│   └── country/
│       ├── BordersItem.jsx
│       ├── BordersList.jsx
│       ├── ContainerCountry.jsx
│       ├── CountryItem.jsx
│       └── CountryList.jsx
│
├── hooks/
│   ├── useBorders.js
│   ├── useCountries.js
│   ├── useCountry.js
│   ├── useDarkMode.js
│   ├── useLocalStorage.js
│   └── useSortBy.js
│
├── pages/
│   ├── AppLayout.jsx
│   ├── Countries.jsx
│   └── Country.jsx
│
├── services/
│   └── apiCountries.js
│
├── ui/
│   ├── CountriesLoader.jsx
│   ├── CountryLoader.jsx
│   ├── DarkModeButton.jsx
│   ├── HeroBg.jsx
│   └── Message.jsx
│
├── App.jsx
├── main.jsx
└── style/
    └── index.css
```

The project separates **features, pages, reusable UI, hooks, services,
and global state**, keeping the application easier to maintain and
extend.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AghelanKing/World-Rank.git
cd 17-world-rank
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API key

WorldRank uses the REST Countries API with an API key.

Create a `.env` file in the project root:

```env
VITE_REST_COUNTRIES_API_KEY=your_api_key
```

Then use the environment variable in the API service instead of
hard-coding the key.

> **Security note:** Never commit a real API key to a public repository.
> If a key has previously been exposed in source code or a public
> repository, revoke it and create a new one.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## 📜 Available Scripts

Command Description

---

`npm run dev` Start the development server
`npm run build` Create a production build
`npm run preview` Preview the production build locally
`npm run lint` Run ESLint

## 🧩 Architecture

WorldRank uses two complementary approaches for application state:

### Server State

TanStack Query handles data received from the REST Countries API,
including:

- Fetching
- Caching
- Loading states
- Error states
- Query-based updates

### Client State

Redux Toolkit is used for application-level state that belongs to the
client.

This separation keeps remote API data and local application state from
becoming unnecessarily coupled.

## 🎨 User Experience

The interface was designed with responsive behavior in mind, including:

- Mobile-friendly country listings
- Responsive table columns
- Dark mode
- Loading skeletons
- Empty/error messaging
- Country detail navigation

## 🔌 API

WorldRank is powered by the REST Countries API.

The application uses endpoints for:

- Country collections
- Country lookup by common name
- Border/neighbor information

API access requires a valid REST Countries API key configured through
the environment variables.

## 🧪 Project Goal

This project was created as a **hands-on React practice project**.

The main goal was not simply to display country data, but to practice
building a complete frontend application with:

- Reusable components
- Custom hooks
- API services
- Server-state management
- Global state
- Routing
- Responsive design
- Loading and error states
- Persistent UI preferences

## 🔮 Possible Improvements

Some ideas for future iterations:

- [ ] Add pagination or infinite scrolling
- [ ] Improve API error handling for different HTTP status codes
- [ ] Add more advanced country sorting options
- [ ] Add favorites/bookmarks
- [ ] Add richer country statistics
- [ ] Add automated tests
- [ ] Add accessibility improvements
- [ ] Add a dedicated 404 page
- [ ] Deploy the application

## 👨‍💻 Author

GitHub : https://github.com/AghelanKing

Built with ❤️ as a React practice project.

---

⭐ If you find the project useful or interesting, consider giving the
repository a star.
