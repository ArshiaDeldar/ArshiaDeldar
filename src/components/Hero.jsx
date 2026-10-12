import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowDownToLine,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[15%] h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10">
        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-right"
        >
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={16} />
            <span>سلام، خوش اومدی 👋</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-5xl lg:text-6xl">
            یک{" "}
            <span className="bg-gradient-to-l from-blue-400 to-violet-500 bg-clip-text text-transparent">
              Frontend Developer
            </span>{" "}
            هستم
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
            با تمرکز روی React، JavaScript و تکنولوژی‌های مدرن وب، رابط‌های
            کاربری سریع، زیبا و Responsive می‌سازم.
            <br />
            در کنار Frontend، در حال یادگیری Backend هستم تا در آینده به یک
            Full-Stack Developer تبدیل شوم.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-l from-blue-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/30 sm:w-auto"
            >
              مشاهده پروژه‌ها
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>

            <a
              href="#"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5 sm:w-auto"
            >
              دانلود رزومه
              <ArrowDownToLine size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
            <a
              target="_blank"
              href="https://github.com/ArshiaDeldar"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            >
              <FaLinkedinIn size={19} />
            </a>
            <a
              href="mailto:arshiadeldarr@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        {/* ================= CODE CARD ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto hidden w-full max-w-lg lg:block"
        >
          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-[90px]" />

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Main Code Window */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1428]/80 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              {/* Window Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <Code2 size={20} className="text-blue-400" />
              </div>

              {/* Code */}
              <div
                dir="ltr"
                className="rounded-2xl border border-white/5 bg-[#060c18] p-6 font-mono text-sm leading-8"
              >
                <p className="text-gray-500">
                  <span className="text-violet-400">const</span> developer ={" "}
                  {"{"}
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">name:</span>{" "}
                  <span className="text-green-400">"Frontend Developer"</span>,
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">skills:</span> [
                </p>

                <p className="pl-10 text-green-400">"React",</p>

                <p className="pl-10 text-green-400">"JavaScript",</p>

                <p className="pl-10 text-green-400">"Tailwind CSS",</p>

                <p className="pl-5">],</p>

                <p className="pl-5">
                  <span className="text-blue-400">learning:</span>{" "}
                  <span className="text-green-400">"Backend"</span>
                </p>

                <p className="text-gray-500">{"}"}</p>
              </div>

              {/* Bottom Badge */}
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-blue-500/10 bg-blue-500/5 px-4 py-3">
                <span className="text-xs text-gray-400">
                  Building modern web experiences
                </span>

                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              </div>
            </div>

            {/* Floating Small Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 bg-[#0b1428]/90 px-5 py-4 shadow-xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Code2 size={20} />
                </div>

                <div dir="rtl">
                  <p className="text-xs text-gray-500">تمرکز اصلی</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Frontend Development
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
