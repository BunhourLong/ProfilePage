/**
 * A single skill chip. Rendered once per skill, each with its own `label`,
 * so the same component produces different content per instance.
 *
 * Hover moves it to the indigo accent, and `transition-colors` makes that
 * change ease instead of snap.
 */
function SkillTag({ label }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700">
      {label}
    </span>
  )
}

export default SkillTag
