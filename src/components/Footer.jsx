export default function Footer() {
  return (
    <footer id="cta" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="rounded-2xl bg-gray-900 text-white p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-indigo-500/30 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 bg-fuchsia-500/30 rounded-full blur-2xl" />

          <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Bring your campus onto one platform</h3>
              <p className="mt-2 text-white/70 max-w-xl">
                See how institutions reduce manual work, improve data accuracy, and make smarter decisions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your work email"
                className="w-full sm:w-80 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold shadow-sm hover:bg-white/90 transition">
                Request demo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} EduVerse ERP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#modules" className="hover:text-gray-900">Modules</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
