import StatusBadge from './components/StatusBadge.jsx'
import './App.css'

function App() {
  const name = 'Long Bunhour'
  const goal =
    'My goal for this course is to master React fundamentals — components, props, and state — and ship a portfolio of real projects I can show to employers.'
  const isOpenToWork = true
  const currentYear = new Date().getFullYear()

  return (
    <main className="profile">
      <header className="profile-header">
        <h1 className="profile-name">{name}</h1>
        <StatusBadge isOpenToWork={isOpenToWork} />
      </header>

      <hr className="profile-divider" />

      <p className="profile-goal">{goal}</p>

      <footer className="profile-footer">
        <p>
          Built with React &amp; Vite — {currentYear}
        </p>
      </footer>
    </main>
  )
}

export default App
