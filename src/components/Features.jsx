import { Users, Calendar, BarChart3, Shield, Cloud, Settings } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Unified Stakeholders",
      desc: "One hub for students, faculty, parents, and administrators with role-based access.",
    },
    {
      icon: Calendar,
      title: "Academic Orchestration",
      desc: "Timetables, courses, exams, grading, and transcripts — all in sync.",
    },
    {
      icon: BarChart3,
      title: "Insightful Analytics",
      desc: "Real-time dashboards, KPIs, and custom reports for strategic decisions.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "Granular permissions, audit trails, and region-ready data compliance.",
    },
    {
      icon: Cloud,
      title: "Cloud-native & Mobile",
      desc: "Fast, reliable, and accessible anywhere across devices and campuses.",
    },
    {
      icon: Settings,
      title: "Modular & Extensible",
      desc: "Pick the modules you need now and add more as you grow.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for the entire academic lifecycle
          </h2>
          <p className="mt-4 text-gray-600">
            Streamline every department with connected data and automated workflows that adapt to your institution.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
