export default function ContentSection({ title, children }) {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mt-6">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      {children}
    </section>
  )
}

