/**
 * Availability pill. One prop in, different content out per instance:
 * the ternary picks both the label and the colour.
 *
 * px-3 -> 12px, py-1 -> 4px, gap-2 -> 8px (all on the 4px scale)
 */
function StatusBadge({ isOpenToWork }) {
  return (
    <span
      className={
        isOpenToWork
          ? 'inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-800 ring-1 ring-green-600/20'
          : 'inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-500/20'
      }
    >
      <span
        className={
          isOpenToWork
            ? 'size-2 rounded-full bg-green-600'
            : 'size-2 rounded-full bg-gray-500'
        }
      />
      {isOpenToWork ? 'Open to work' : 'Busy learning'}
    </span>
  )
}

export default StatusBadge
