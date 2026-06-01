# What is Next.Js?
Next.js is a React-based framework used to build fast, SEO-friendly, and full-stack web applications.
```
It provides features like:

Server-Side Rendering (SSR)
Static Site Generation (SSG)
API Routes
File-based Routing
Image Optimization
Middleware
Full-stack support

It is built on top of React by Vercel.
```

# Difference between SPA and Next.js framework?
SPA (Single Page Application) loads a single HTML page and dynamically updates content using JavaScript without refreshing the page. React applications usually work as SPAs.

Next.js is a React framework that supports SPA features along with Server-Side Rendering, Static Site Generation, routing, API handling, and SEO optimization. Unlike a pure SPA, Next.js provides better performance and SEO because pages can be rendered on the server.

# What is JSX?
JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript.

# What is app route in next js?
App Router in Next.js is the modern routing system introduced in Next.js 13 that uses the app directory for routing and supports layouts, server components, loading states, and nested routing for better performance and scalability.

```
my-app/
 ├── app/
 │    ├── page.js
 │    ├── about/
 │    │     └── page.js
 │    └── contact/
 │          └── page.js
```

# What is layout.jsx file in Next.Js?
layout.jsx in Next.js App Router is a special file used to create shared layouts for multiple pages. It wraps pages using the children prop and is commonly used for navbars, sidebars, and footers.
```
app/
 ├── layout.jsx
 ├── page.jsx
 ├── about/
 │    └── page.jsx
```

# What is the nested layout in Next.JS?
Nested Layout in Next.js is a feature of the App Router where layouts can be created inside folders to provide different shared UI structures for different sections of the application.
```
app/
 ├── layout.jsx
 ├── page.jsx
 │
 ├── dashboard/
 │     ├── layout.jsx
 │     ├── page.jsx
 │     └── analytics/
 │            └── page.jsx
```

| Route        | Layout                       |
| ------------ | ---------------------------- |
| `/`          | Navbar + Footer              |
| `/dashboard` | Navbar + Sidebar + Dashboard |
| `/admin`     | Admin Sidebar                |


# What is Browser rendreing feature and why we use "use client" in Next.Js?
Browser-side rendering features are functionalities that require the browser environment, such as event handlers, React hooks, and browser APIs like window or localStorage. These features require "use client" in Next.js App Router.
| Feature        | Need `"use client"`? |
| -------------- | -------------------- |
| `useState`     | ✅                    |
| `useEffect`    | ✅                    |
| `onClick`      | ✅                    |
| `onChange`     | ✅                    |
| `window`       | ✅                    |
| `document`     | ✅                    |
| `localStorage` | ✅                    |
| Static JSX     | ❌                    |
| async fetch    | ❌                    |
| SEO content    | ❌                    |
