import Hero from "./components/Hero";
import Features from "./components/Features";
import Modules from "./components/Modules";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Simple top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-fuchsia-600" />
            <span className="font-semibold">EduVerse ERP</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#modules" className="hover:text-gray-900">Modules</a>
            <a href="#cta" className="hover:text-gray-900">Request demo</a>
          </nav>
          <a href="#cta" className="ml-4 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-3.5 py-1.5 text-sm font-medium shadow hover:bg-gray-800">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Modules />
        <Footer />
      </main>
    </div>
  );
}

export default App;
