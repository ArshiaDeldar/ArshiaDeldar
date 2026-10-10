import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    description: "ساختاردهی استاندارد صفحات وب",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    description: "طراحی و ساخت رابط‌های زیبا و Responsive",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    description: "منطق و تعاملات مدرن وب",
    icon: FaJsSquare,
  },
  {
    name: "React",
    description: "ساخت رابط‌های کاربری مدرن",
    icon: FaReact,
  },
  {
    name: "Git",
    description: "مدیریت نسخه و کنترل پروژه",
    icon: FaGitAlt,
  },
  {
    name: "Tailwind CSS",
    description: "طراحی سریع و مدرن رابط کاربری",
    icon: SiTailwindcss,
  },
  {
    name: "Next.js",
    description: "ساخت اپلیکیشن‌های مدرن React",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    description: "کدنویسی امن‌تر و قابل‌اعتمادتر",
    icon: SiTypescript,
  },
  {
    name: "Docker",
    description: "مدیریت و اجرای محیط پروژه",
    icon: FaDocker,
  },
];

const Skills = () => {
  return (
    <section id="skills" dir="rtl" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[10%] h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium text-blue-400">
            تخصص و تکنولوژی
          </span>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            مهارت‌های من
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            تکنولوژی‌هایی که برای ساخت وب‌سایت‌ها و اپلیکیشن‌های مدرن استفاده
            می‌کنم.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.04] hover:shadow-xl hover:shadow-blue-950/20"
              >
                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center gap-5">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0b1428] text-2xl text-blue-400 transition duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                    <Icon />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {skill.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-6 text-gray-500">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
