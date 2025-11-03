import { BookOpen, FileText, CreditCard, ClipboardList, Users, Building2 } from "lucide-react";

export default function Modules() {
  const modules = [
    {
      icon: BookOpen,
      name: "Admissions",
      tagline: "Lead capture, applications, and workflows",
      bullets: ["Multi-stage reviews", "Merit lists", "Offer letters"],
    },
    {
      icon: Users,
      name: "Student Lifecycle",
      tagline: "Profiles, attendance, and discipline",
      bullets: ["Biometric sync", "Parent portal", "Counselling"],
    },
    {
      icon: FileText,
      name: "Academics",
      tagline: "Courses, timetables, exams, and grading",
      bullets: ["CBT & OMR", "Transcripts", "Program outcomes"],
    },
    {
      icon: CreditCard,
      name: "Finance",
      tagline: "Fees, invoicing, and payroll",
      bullets: ["Online payments", "Scholarships", "Collections"],
    },
    {
      icon: ClipboardList,
      name: "HR & Payroll",
      tagline: "Recruitment, leaves, and compliance",
      bullets: ["Appraisals", "Time tracking", "Payslips"],
    },
    {
      icon: Building2,
      name: "Campus Ops",
      tagline: "Hostels, transport, inventory, and assets",
      bullets: ["Allocations", "Route plans", "Maintenance"],
    },
  ];

  return (
    <section id="modules" className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Modular by design</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Start with core essentials and expand with advanced modules. Everything integrates seamlessly.
            </p>
          </div>
          <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-2.5 font-medium shadow hover:bg-gray-800">
            Get a demo
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.name} className="rounded-2xl bg-white/80 backdrop-blur border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center">
                  <m.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                  <p className="text-sm text-gray-600">{m.tagline}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc list-inside">
                {m.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
