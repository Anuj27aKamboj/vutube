<div align="center">

# 📺 VuTube

### A YouTube clone built with React — browse trending videos, search in real time, watch with nested comments, and chat live with other viewers.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter)](https://reactrouter.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![YouTube API](https://img.shields.io/badge/YouTube_Data_API-v3-FF0000?style=for-the-badge&logo=youtube)](https://developers.google.com/youtube/v3)

</div>

---

## Overview

VuTube replicates the core YouTube experience as a single-page React application. Real video data from the YouTube Data API v3, real-time search with debouncing and suggestion caching, nested comment threads rendered recursively, and a live chat simulation managed through Redux.

---

## Features

- **Trending feed** — live video data from YouTube Data API v3 with skeleton loaders
- **Real-time search** — debounced suggestions (200ms), results cached in Redux to avoid repeat API calls
- **Watch page** — embedded player, video metadata, recursively rendered nested comments
- **Live chat** — interval-driven message queue in Redux, capped at 25 messages to prevent memory growth; users can submit their own messages
- **Infinite scroll** — cursor-based pagination on the video feed
- **Collapsible sidebar** — state in Redux, toggled from the header, consumed by layout components without prop drilling

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| State Management | Redux Toolkit 2 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v3 |
| Data Source | YouTube Data API v3 |

---

## Getting Started

### Prerequisites

- Node.js >= 16
- A YouTube Data API v3 key ([get one here](https://console.cloud.google.com/apis/library/youtube.googleapis.com))

### Installation

```bash
git clone https://github.com/Anuj27aKamboj/vutube.git
cd vutube
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
```

Then reference it in `src/utils/constants.js` as `process.env.REACT_APP_YOUTUBE_API_KEY`.

> ⚠️ YouTube Data API v3 has a daily quota of 10,000 units. Search requests cost 100 units each — cache aggressively and avoid unnecessary calls.

### Run

```bash
npm start        # development server at localhost:3000
npm run build    # production build
```

---

## Notable Implementation Details

**Debounced search with cache** — API calls fire only after the user pauses typing. Previously fetched suggestions are stored in Redux so repeat queries are served from the store, not the network.

**Recursive comments** — each `Comment` component checks for replies and renders another layer of `Comment` components if they exist, handling arbitrarily deep threads without special-casing depth.

**Live chat queue** — a `setInterval` dispatches randomly generated messages to Redux every second. The slice prepends new messages and prunes the oldest when the queue exceeds 25 items, keeping memory bounded without any backend.

---

<div align="center">

Built by [Anuj Kamboj](https://github.com/Anuj27aKamboj)

</div>
