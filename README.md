<div align="center">

# 📺 VuTube

### A feature-rich YouTube clone built with React — browse trending videos, search in real time, watch with nested comments, and chat live with other viewers.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter)](https://reactrouter.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![YouTube API](https://img.shields.io/badge/YouTube_Data_API-v3-FF0000?style=for-the-badge&logo=youtube)](https://developers.google.com/youtube/v3)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Key Implementation Details](#-key-implementation-details)
- [Redux State Architecture](#-redux-state-architecture)
- [API Integration](#-api-integration)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)

---

## 🧭 Overview

VuTube is a YouTube-inspired single-page application built entirely with React. It replicates the core YouTube experience — a responsive video feed, real-time search with debouncing and autocomplete, a dedicated watch page with nested comment threads, infinite scroll pagination, and a **live chat** feature that simulates YouTube's live stream chat using a randomized message feed managed through Redux.

The app is powered by the **YouTube Data API v3** for real video content, and uses **Redux Toolkit** for all shared state including search history, sidebar toggling, and the live chat message queue.

---

## ✨ Features

### 🏠 Browse Page
- Trending video feed fetched live from YouTube Data API v3
- Responsive video card grid — adapts seamlessly from mobile to widescreen
- Collapsible sidebar with navigation links
- Category filter chips to browse by topic
- Skeleton shimmer loaders while content fetches — no blank screens

### 🔍 Search
- Real-time search suggestions powered by YouTube's suggestion API
- **Debounced API calls** (200ms) — prevents excessive requests on every keystroke
- Search history persisted in Redux — recent searches surfaced in the dropdown
- Full search results page with video cards

### 📹 Watch Page
- Embedded YouTube player via `iframe`
- Video title, channel info, view count, and like count displayed alongside the player
- **Nested / threaded comments** — replies rendered recursively up to N levels deep
- Related video recommendations in the sidebar

### 💬 Live Chat
- Simulates YouTube's live stream chat experience
- New messages auto-generated at a configurable interval and dispatched to Redux store
- Messages rendered in a scrollable chat window with sender name and message text
- Users can type and submit their own messages — instantly added to the chat feed
- Chat message queue capped to prevent unbounded memory growth — oldest messages pruned automatically
- State managed entirely in Redux — no backend required

### ⚡ Performance
- **Debounced search** — API calls fire only after the user pauses typing
- **Cursor-based pagination** — infinite scroll loads the next page of videos seamlessly
- **Shimmer / skeleton loaders** — perceived performance maintained during data fetches
- **Memoized components** — unnecessary re-renders avoided via React best practices
- API responses cached in Redux — navigating back to the feed doesn't re-fetch

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| State Management | Redux Toolkit 2 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v3 |
| Build Tool | Create React App (react-scripts 5) |
| Data Source | YouTube Data API v3 |
| Testing | React Testing Library + Jest |

---

## 📂 Project Structure

```
vutube/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js           # Top navigation bar with search input
│   │   ├── Sidebar.js          # Collapsible left sidebar with nav links
│   │   ├── VideoCard.js        # Individual video thumbnail card
│   │   ├── VideoContainer.js   # Feed grid — fetches and renders video cards
│   │   ├── WatchPage.js        # Video player + comments + recommendations
│   │   ├── CommentsContainer.js# Top-level comments loader
│   │   ├── Comment.js          # Single comment with recursive reply rendering
│   │   ├── LiveChat.js         # Live chat window with message feed
│   │   ├── ChatMessage.js      # Individual chat message component
│   │   ├── ButtonList.js       # Category filter chip bar
│   │   ├── Button.js           # Reusable filter chip button
│   │   ├── SearchResults.js    # Search results page
│   │   └── Shimmer.js          # Skeleton loader for video cards
│   ├── store/
│   │   ├── appStore.js         # Redux store configuration
│   │   ├── appSlice.js         # Sidebar toggle state
│   │   ├── searchSlice.js      # Search cache + search history
│   │   └── chatSlice.js        # Live chat message queue
│   ├── utils/
│   │   ├── constants.js        # API keys, endpoints, config values
│   │   └── mockData.js         # Fallback / mock data for development
│   ├── App.js                  # Root component with route definitions
│   └── index.js                # React entry point
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 8
- A YouTube Data API v3 key ([get one here](https://console.cloud.google.com/apis/library/youtube.googleapis.com))

### Installation

```bash
# Clone the repository
git clone https://github.com/Anuj27aKamboj/vutube.git
cd vutube

# Install dependencies
npm install
```

### Configuration

Create a `constants.js` file in `src/utils/` (or update the existing one) with your API key:

```js
export const YOUTUBE_API_KEY = "YOUR_YOUTUBE_DATA_API_V3_KEY";
export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
```

### Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Build for Production

```bash
npm run build
# Production-optimised output in the /build folder
```

---

## 🔑 Environment Variables

> **Note:** This project uses Create React App. To keep your API key out of source control, use a `.env` file at the project root:

```env
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
```

Then reference it in code as `process.env.REACT_APP_YOUTUBE_API_KEY`.

Add `.env` to your `.gitignore` — **never commit API keys to a public repository.**

---

## 🔍 Key Implementation Details

### Debounced Search with Suggestion Cache

Every keystroke in the search bar triggers a state update, but the API call is gated behind a debounce timer. Previously fetched suggestions are cached in Redux so repeat queries are served instantly without a network round-trip:

```
User types "react"
  → 200ms debounce timer starts
  → Timer fires → check Redux cache
  → Cache hit? Render from store. Cache miss? Fetch from API → store result
```

### Nested / Recursive Comments

YouTube comments can have deeply nested reply threads. VuTube renders these recursively — each `Comment` component checks for replies and renders another layer of `Comment` components if they exist, up to any depth:

```
<Comment>           ← top-level comment
  <Comment>         ← reply
    <Comment>       ← reply to reply
```

### Live Chat Architecture

The live chat simulates YouTube's streaming chat without any backend:

1. A `setInterval` fires every second and dispatches a randomly generated message to the Redux `chatSlice`.
2. The slice maintains a capped message queue (e.g. last 25 messages) — oldest messages are shifted out as new ones arrive, preventing unbounded memory growth.
3. The user's own messages are dispatched to the same slice and appear immediately in the feed.
4. The chat window auto-scrolls to the latest message on every update.

```js
// chatSlice.js — simplified
const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(0, 0, action.payload); // prepend
      if (state.messages.length > 25) state.messages.pop(); // cap queue
    },
  },
});
```

### Sidebar State with Redux

The sidebar open/closed state lives in Redux (`appSlice`) so any component in the tree can toggle or read it without prop drilling — the `Header` toggles it, the `Sidebar` reads it, and the main content area adjusts its layout accordingly.

---

## 🗃 Redux State Architecture

```
store/
├── app       { isMenuOpen: boolean }
├── search    { cache: { [query]: [suggestions] } }
└── chat      { messages: [{ name, message }] }
```

| Slice | State | Actions |
|-------|-------|---------|
| `appSlice` | `isMenuOpen` | `toggleMenu` |
| `searchSlice` | `cache` | `cacheResults` |
| `chatSlice` | `messages` | `addMessage` |

---

## 📡 API Integration

| API | Endpoint | Used For |
|-----|----------|----------|
| YouTube Data API v3 | `/videos` | Trending video feed |
| YouTube Data API v3 | `/search` | Search results |
| YouTube Data API v3 | `/commentThreads` | Video comments |
| Google Suggest API | `/complete/search` | Real-time search suggestions |

All API calls include error handling with fallback UI — if the YouTube API quota is exceeded or a request fails, the app degrades gracefully rather than crashing.

> ⚠️ **YouTube Data API v3 has a daily quota limit of 10,000 units.** A single video list request costs 1 unit; a search request costs 100 units. Plan your usage accordingly and consider caching aggressively in Redux to minimise repeat calls.

---

## 🖼 Screenshots

> _Coming soon — UI screenshots of Browse, Watch, Search, and Live Chat pages._

---

## 🔮 Future Improvements

- **Authentication** — Google OAuth login to personalise the feed and save watch history
- **Dark / Light mode toggle** — theme switcher with Tailwind's dark mode utilities
- **Video upload simulation** — mock upload flow with progress indicator
- **Persistent watch history** — track viewed videos in localStorage
- **Like / Dislike interaction** — local state toggle with animated feedback
- **Subscription simulation** — follow channels and filter the feed accordingly
- **Real WebSocket chat** — replace the simulated interval with a real Socket.io backend for multi-user live chat
- **TypeScript migration** — full type safety across components, slices, and API responses
- **PWA support** — service worker + manifest for installable offline-capable app
- **CI/CD pipeline** — GitHub Actions workflow for automated lint, test, and build on every push

---

<div align="center">

Built with ❤️ by [Anuj Kamboj](https://github.com/Anuj27aKamboj)

</div>
