import ProjectCard from './components/ProjectCard.jsx'
import Section from './components/Section.jsx'
import SkillTag from './components/SkillTag.jsx'
import StatusBadge from './components/StatusBadge.jsx'

const projects = [
  {
    id: 'profile-page',
    title: 'Profile Page',
    description:
      'This site. A responsive developer profile built by hand with React, Vite and Tailwind, composed from reusable props-driven components.',
    status: 'Live',
    href: 'https://github.com/BunhourLong/ProfilePage',
  },
  {
    id: 'course-notes',
    title: 'Course Notes App',
    description:
      'A small note-taking app for my React course, where I practise state, lists and forms by rebuilding each lesson from scratch.',
    status: 'In progress',
    href: 'https://github.com/BunhourLong',
  },
]

const skills = ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Git', 'HTML']

function App() {
  const name = 'Long Bunhour'
  const goal =
    'My goal for this course is to master React fundamentals — components, props and state — and ship a portfolio of real projects I can show to employers.'
  const isOpenToWork = true
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {name}
            </h1>
            <p className="mt-2 text-gray-500">
              Front-end developer in training · Phnom Penh
            </p>
          </div>
          <StatusBadge isOpenToWork={isOpenToWork} />
        </header>

        {/* One column on phones; main + sidebar from md: (768px) up. */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <main className="flex flex-col gap-8 md:col-span-2">
            <Section title="About">
              <p className="leading-relaxed">{goal}</p>
            </Section>

            <Section title="Projects">
              <div className="flex flex-col gap-4">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status}
                    href={project.href}
                  />
                ))}
              </div>
            </Section>
          </main>

          <aside className="flex flex-col gap-8 md:col-span-1">
            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </div>
            </Section>

            <Section title="Links">
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    className="text-indigo-600 transition-colors duration-200 hover:text-indigo-800 hover:underline"
                    href="https://github.com/BunhourLong"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/BunhourLong
                  </a>
                </li>
                {/* Add a contact line here when you want one, e.g.
                    <a href="mailto:you@example.com">you@example.com</a> */}
              </ul>
            </Section>
          </aside>
        </div>

        <footer className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
          <p>Built with React, Vite &amp; Tailwind CSS — {currentYear}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
