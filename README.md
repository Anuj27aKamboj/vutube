# Vutube (YouTube Clone)

Link: https://github.com/Anuj27aKamboj/vutube

Tech Stack: React, JavaScript (ES6+), Tailwind CSS, Redux Toolkit, React Router, REST APIs, Node.js, Git, ESLint

## Project Overview

Vutube is a YouTube-inspired web application that replicates the core functionalities of the YouTube platform, providing a modern, responsive, and interactive video browsing experience. Users can explore trending videos, search for content, view video details, and interact with comments—all while experiencing infinite scroll and optimized performance.

## Key Features

Responsive UI: Built with Tailwind CSS to ensure seamless experience across desktop and mobile devices.

Infinite Scroll & Pagination: Dynamically fetch and display videos using cursor-based pagination, mimicking YouTube’s browsing experience.

State Management: Efficiently managed application state using Redux Toolkit for search history, menu toggling, and chat/messages.

Video Interaction: Supports video details, nested comments, likes/dislikes, and subscription-style navigation.

Shimmer Loading & Performance Optimization: Implements skeleton loaders and lazy-loading for better perceived performance.

Secure API Integration: Fetches video and search data via REST APIs with error handling and fallback UI.

Getting Started

Clone the repository:

git clone https://github.com/Anuj27aKamboj/vutube.git


Install dependencies:

npm install


Run the development server:

npm start


Open http://localhost:3000
 to view the app in the browser.

Folder Structure
src/
 ├─ components/     # Reusable UI components (VideoCard, Sidebar, Comments, Header)
 ├─ pages/          # Main pages (BrowsePage, WatchPage)
 ├─ store/          # Redux slices and store configuration
 ├─ utils/          # API calls, constants, mock data
 └─ App.js          # Root component with routing