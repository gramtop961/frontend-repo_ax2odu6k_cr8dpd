import { GraduationCap, Building2, Rocket, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium">
              <Shield className="h-3.5 w-3.5" />
              Secure, scalable, and built for modern campuses
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              The Modern ERP for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                Education & Universities
              </span>
            </h1>
            <p className="mt-5 text-gray-600 text-lg md:text-xl leading-relaxed">
              Unite admissions, academics, finance, HR, and campus operations in a single, intuitive platform. Make data-driven decisions and deliver exceptional student experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="#modules"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-6 py-3 font-semibold shadow-sm hover:bg-indigo-700 transition"
              >
                <Rocket className="h-5 w-5" />
                Explore Modules
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold ring-1 ring-gray-200 hover:ring-gray-300 shadow-sm transition"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                Student-first
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-indigo-600" />
                Multi-campus
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                Enterprise-grade
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="absolute -top-20 -right-20 h-52 w-52 bg-indigo-100 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-10 h-44 w-44 bg-fuchsia-100 rounded-full blur-3xl" />

              <div className="relative p-6 md:p-8">
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div className="rounded-lg bg-indigo-50 p-4">
                    <p className="font-semibold text-gray-900">Live Attendance</p>
                    <p className="mt-1">Biometric & mobile check-ins</p>
                  </div>
                  <div className="rounded-lg bg-violet-50 p-4">
                    <p className="font-semibold text-gray-900">Smart Timetables</p>
                    <p className="mt-1">Auto scheduling & conflicts</p>
                  </div>
                  <div className="rounded-lg bg-rose-50 p-4">
                    <p className="font-semibold text-gray-900">Finance Suite</p>
                    <p className="mt-1">Fees, invoicing, payroll</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-4">
                    <p className="font-semibold text-gray-900">Analytics</p>
                    <p className="mt-1">KPIs & performance dashboards</p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-5">
                  <p className="text-sm text-gray-700">
                    "Since adopting our new ERP, we consolidated 6 tools into one and improved on-time fee collection by 23%."
                  </p>
                  <p className="mt-2 text-xs text-gray-500">— Director of Operations, Northbridge University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
