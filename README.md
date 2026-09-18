# Profile Page

A personal developer profile page built with **React**, **Vite**, **Tailwind CSS** and **shadcn/ui** — my portfolio project for the React course.

It renders my name, my goal for the course, a project list and a skills sidebar, composed entirely from small reusable components that receive their data through props.

## Features

- **Responsive layout** — a single column on phones, main content + sidebar from `md:` (768px) up
- **Tailwind only** — no custom CSS files, no inline styles, no arbitrary values; every size comes from the built-in 4px spacing scale
- **Reusable components** — `Section` (children), `StatusBadge`, `SkillTag` and `ProjectCard` (data via props)
- **shadcn/ui** — `ProjectCard` is composed from the `Card`, `Badge` and `Button` primitives
- **Interactive states** — `hover:` styles with `transition-*` on cards, buttons, links and skill tags

## Design system

**Spacing** — everything sits on Tailwind's 4px scale, so `p-6` is `6 × 4px = 24px`:

| Class | Value | Used for |
| --- | --- | --- |
| `py-1` | 4px | badge / tag vertical padding |
| `gap-2`, `px-3` | 8px, 12px | tag gaps, pill padding |
| `mt-4` | 16px | section heading → body |
| `p-6`, `pt-6` | 24px | section padding, footer rule |
| `gap-8` | 32px | grid gutters, stacked sections |
| `mt-12` | 48px | header → content, content → footer |

**Text hierarchy** — three grays, all comfortably above WCAG AA on white/`gray-50`:

| Class | Role | On white | On `gray-50` |
| --- | --- | --- | --- |
| `text-gray-900` | headings, card titles | 17.74:1 | 16.98:1 |
| `text-gray-700` | body copy | 10.31:1 | 9.86:1 |
| `text-gray-500` | labels, meta, footer | 4.83:1 | 4.63:1 |

The weakest pairing is `text-gray-500`, still above the 4.5:1 WCAG AA floor for body text. White on `indigo-600` measures 6.29:1.

**Accent** — a single accent colour, **indigo**: `indigo-600` for the button and links, `indigo-700/800` for hover, `indigo-100/50` for tinted backgrounds.

## Component architecture

```
App.jsx                    owns the data (projects, skills) and the layout
├── StatusBadge            prop -> ternary picks label + colour
├── Section                wrapper; renders whatever is nested as {children}
│   ├── ProjectCard  ×2    shadcn Card + Badge + Button, one per project
│   └── SkillTag     ×6    one per skill, each with its own label
```

Data flows **one way**: `App` holds the arrays and passes values down as props. No child writes back to its parent, and no child owns state that its parent also tracks.

```jsx
// Two instances, different data, no shared state:
<ProjectCard title="Profile Page"     status="Live"        href="…" />
<ProjectCard title="Course Notes App" status="In progress" href="…" />

// Section takes its body through the children prop:
<Section title="About">
  <p>{goal}</p>
</Section>
```

## JSX rules practiced

| Rule | Where |
| --- | --- |
| One parent element | `App` returns a single wrapping `<div>` |
| `className`, not `class` | every element in `src/` |
| All tags closed | `<StatusBadge />`, `<SkillTag />`, `<span className="size-2 …" />` |
| Live expressions in `{}` | `{name}`, `{goal}`, `{currentYear}`, `{children}`, `{projects.map(…)}` |

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
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

Then open <http://localhost:5173>. Edit `src/App.jsx` and save — the page updates instantly via HMR.

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
│   ├── ui/                # shadcn/ui primitives (generated)
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   └── card.jsx
│   ├── ProjectCard.jsx    # Card + Badge + Button composition
│   ├── Section.jsx        # panel wrapper using {children}
│   ├── SkillTag.jsx       # one chip per skill
│   └── StatusBadge.jsx    # "Open to work" / "Busy learning"
├── lib/utils.js           # cn() class-merge helper
├── App.jsx                # data + responsive layout
├── index.css              # Tailwind entry + theme tokens
└── main.jsx               # React entry point
```

Adding more shadcn/ui primitives:

```bash
npx shadcn@latest add <component>
```

## Author

**Long Bunhour** — [@BunhourLong](https://github.com/BunhourLong)
