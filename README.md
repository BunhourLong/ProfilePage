# Profile Page

A personal developer profile page built by hand with **React** and **Vite** — the first project in my React course portfolio.

It renders my name, my goal for the course, and a reusable `StatusBadge` component that switches between **"Open to work"** (green) and **"Busy learning"** (gray) based on a prop.

## Features

- **Hand-written components** — no template code left behind
- **`StatusBadge`** — a prop-driven component using a ternary for both its label and its color
- **Fast Refresh (HMR)** — editing `src/App.jsx` updates the browser instantly, without a full reload
- **Light & dark mode** — respects the system color scheme

## JSX rules practiced

| Rule | Where |
| --- | --- |
| One parent element | `App` returns a single `<main className="profile">` |
| `className`, not `class` | every element in `App.jsx` and `StatusBadge.jsx` |
| All tags closed | `<hr />`, `<StatusBadge />`, `<span className="badge-dot" />` |
| Live expressions in `{}` | `{name}`, `{goal}`, `{currentYear}`, `{isOpenToWork ? … : …}` |

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Setup

Requires [Node.js](https://nodejs.org/) 20.19+ or 22.12+.

```bash
# 1. Clone the repository
git clone https://github.com/BunhourLong/ProfilePage.git
cd ProfilePage

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open <http://localhost:5173> in your browser. Edit `src/App.jsx` and save — the page updates instantly via HMR.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the project with oxlint |

## Project structure

```
src/
├── components/
│   ├── StatusBadge.jsx   # prop-driven status badge (ternary)
│   └── StatusBadge.css
├── App.jsx               # profile page: <h1>, <p>, <StatusBadge />
├── App.css
├── index.css             # global styles + dark mode
└── main.jsx              # React entry point
```

## Usage

```jsx
<StatusBadge isOpenToWork={true} />   // green  — "Open to work"
<StatusBadge isOpenToWork={false} />  // gray   — "Busy learning"
```

## Author

**Long Bunhour** — [@BunhourLong](https://github.com/BunhourLong)
