import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import assets from "../assets/assets";
const projects = [
  {
    title: "قالب وب‌سایت رسپانسیو مدرن",
    description: "یک Landing Page زیبا و مدرن و رسپانسیو که موضوع خاصی نداره.",
    image: assets.Next,
    technologies: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/ArshiaDeldar/Frontend-of-a-modern-responsive-website",
    demo: "https://arshiadeldar.github.io/Frontend-of-a-modern-responsive-website/",
  },
  {
    title: "قالب وب‌سایت حرفه‌ای رسپانسیو با انیمیشن",
    description:
      "یک Landing Page مدرن با انیمیشن Scroll و Cursor متفاوت و دارای تم Dark و Light.",
    image: assets.Agency,
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    github:
      "https://github.com/ArshiaDeldar/Professional-website-UI-responsive",
    demo: "https://arshiadeldar.github.io/Professional-website-UI-responsive/",
  },
  {
    title: "کلون وب‌سایت آمازون",
    description:
      "کلون آمازون به صورت رسپانسیو و شامل چند صفحه از جمله Home, Login, SignUp, ...",
    image: assets.Amazon,
    technologies: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/ArshiaDeldar/Amazon-Clone",
    demo: "https://arshiadeldar.github.io/Amazon-Clone/",
  },
  {
    title: "قالب وب‌سایت رسپانسیو مدرن",
    description:
      "یک Landing Page ساده و زیبا شامل بخش های Home, About, Contact, ...",
    image: assets.Education,
    technologies: ["React", "CSS", "JavaScript"],
    github:
      "https://github.com/ArshiaDeldar/Frontend-of-a-responsive-website-for-education",
    demo: "https://arshiadeldar.github.io/Frontend-of-a-responsive-website-for-education/",
  },
  {
    title: "آنلاین شاپ ساده",
    description:
      "آنلاین شاپ شامل صفحات مختلف Home, Shop, Cart, ... هنوز رسپانسیو نشده.",
    image: assets.Ecommerce,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ArshiaDeldar/Frontend-of-an-Ecommerce-website",
    demo: "https://arshiadeldar.github.io/Frontend-of-an-Ecommerce-website/",
  },
  {
    title: "پروژه بعدی به زودی...",
    description: "",
    image: "",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" dir="rtl" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[5%] top-[15%] h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[5%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium text-blue-400">
            نمونه کارها
          </span>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            پروژه‌های من
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            تعدادی از پروژه‌هایی که برای تمرین و توسعه مهارت‌های خودم ساخته‌ام.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[#0b1428]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                        <span className="text-2xl text-gray-600">🖼️</span>
                      </div>

                      <p className="text-xs text-gray-600">تصویر پروژه</p>
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050b18]/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-blue-500/10 bg-blue-500/5 px-3 py-1 text-[11px] text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <a
                    href={project.demo}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-500 to-violet-600 px-4 py-2.5 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Live Demo
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.github}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
                    aria-label={`GitHub ${project.title}`}
                  >
                    <FaGithub size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
