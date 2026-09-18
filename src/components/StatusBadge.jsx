import './StatusBadge.css'

function StatusBadge({ isOpenToWork }) {
  return (
    <span className={isOpenToWork ? 'badge badge-open' : 'badge badge-busy'}>
      <span className="badge-dot" />
      {isOpenToWork ? 'Open to work' : 'Busy learning'}
    </span>
  )
}

export default StatusBadge
