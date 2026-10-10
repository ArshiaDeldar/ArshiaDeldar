import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" dir="rtl" className="relative overflow-hidden py-28">
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
            در ارتباط باشیم
          </span>

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            تماس با من
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            اگر پروژه‌ای در ذهن دارید یا می‌خواهید درباره یک همکاری صحبت کنید،
            خوشحال می‌شوم پیام شما را دریافت کنم.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <Mail size={24} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              بیایید با هم صحبت کنیم
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-400">
              برای پروژه‌های Frontend، طراحی رابط کاربری و همکاری‌های فریلنسری
              می‌توانید از طریق فرم روبه‌رو با من در ارتباط باشید.
            </p>

            {/* Email */}
            <a
              href="mailto:your@email.com"
              className="mt-7 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-blue-500/20 hover:bg-blue-500/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-500">ایمیل</p>
                <p className="mt-1 text-sm text-gray-300">
                  arshiadeldarr@gmail.com
                </p>
              </div>
            </a>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/ArshiaDeldar"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">نام</label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="نام شما"
                  className="w-full rounded-xl border border-white/10 bg-[#080f20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  ایمیل
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080f20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label className="mb-2 block text-sm text-gray-300">موضوع</label>

              <input
                type="text"
                name="subject"
                required
                placeholder="موضوع پیام"
                className="w-full rounded-xl border border-white/10 bg-[#080f20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2 block text-sm text-gray-300">پیام</label>

              <textarea
                name="message"
                required
                rows="6"
                placeholder="پیام خود را بنویسید..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#080f20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Status */}
            {status === "success" && (
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3 text-sm text-green-400">
                <CheckCircle2 size={18} />
                پیام شما با موفقیت ارسال شد.
              </div>
            )}
            {status === "error" && (
              <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "در حال ارسال..." : "ارسال پیام"}
              <Send size={17} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
