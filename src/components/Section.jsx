/**
 * A reusable panel wrapper.
 *
 * `title` is a normal prop, but the body is whatever JSX the parent nests
 * inside the tags — React hands that to us as the special `children` prop,
 * which we render as {children}.
 *
 * p-6  -> 24px of padding (6 x 4px on Tailwind's spacing scale)
 * mt-4 -> 16px of top margin (4 x 4px)
 */
function Section({ title, children }) {
  return (
    <section className="rounded-xl bg-white p-6 ring-1 ring-gray-200">
      <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
        {title}
      </h2>
      <div className="mt-4 text-gray-700">{children}</div>
    </section>
  )
}

export default Section
