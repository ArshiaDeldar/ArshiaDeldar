import { motion } from "framer-motion";
import { Code2, Rocket, Server, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" dir="rtl" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[10%] h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

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
            بیشتر درباره من
          </span>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            درباره من
          </h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9">
              <p className="text-base leading-9 text-gray-300">
                من یک{" "}
                <span className="font-semibold text-blue-400">
                  Frontend Developer
                </span>{" "}
                هستم که به ساخت رابط‌های کاربری مدرن، سریع و کاربردی علاقه دارم.
              </p>

              <p className="mt-5 text-sm leading-8 text-gray-400">
                تمرکز اصلی من روی React و اکوسیستم مدرن JavaScript است و تلاش
                می‌کنم پروژه‌هایی بسازم که علاوه بر ظاهر حرفه‌ای، تجربه کاربری
                خوبی هم داشته باشند.
              </p>

              <p className="mt-5 text-sm leading-8 text-gray-400">
                در حال حاضر در کنار توسعه Frontend، یادگیری Backend را نیز دنبال
                می‌کنم تا بتوانم در آینده پروژه‌های کامل Full-Stack را توسعه
                دهم.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs text-blue-300">
                  React Developer
                </span>

                <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-xs text-violet-300">
                  UI / UX
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300">
                  Responsive Design
                </span>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <Feature
              icon={<Code2 size={22} />}
              title="کدنویسی تمیز"
              description="ساختار منظم و قابل نگهداری"
            />

            <Feature
              icon={<Rocket size={22} />}
              title="Performance"
              description="تمرکز روی سرعت و تجربه کاربری"
            />

            <Feature
              icon={<Sparkles size={22} />}
              title="طراحی مدرن"
              description="رابط‌های زیبا و کاربردی"
            />
            <Feature
              icon={<Server size={22} />}
              title="در حال یادگیری Backend"
              description="حرکت به سمت Full-Stack"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.04]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:bg-blue-500/15">
        {icon}
      </div>

      <h3 className="font-bold text-white">{title}</h3>

      <p className="mt-2 text-xs leading-6 text-gray-500">{description}</p>
    </motion.div>
  );
};

export default About;
