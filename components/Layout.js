export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <a href="/" className="text-lg font-semibold">My Blog</a>
        </div>
      </header>
      <div>{children}</div>
      <footer className="border-t mt-12">
        <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-gray-500">© 2026</div>
      </footer>
    </div>
  )
}
