import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer dir="rtl" className="border-t border-white/5 bg-[#040914]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          {/* Logo & Text */}
          <div className="text-center md:text-right">
            <a href="#home" className="text-lg font-bold text-white">
              پورتفولیو <span className="text-blue-500">&lt;/&gt;</span>
            </a>

            <p className="mt-2 text-xs text-gray-500">
              ساخت تجربه‌های مدرن برای وب
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ArshiaDeldar"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href="#contact"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              aria-label="تماس"
            >
              <span className="text-sm">@</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-5 text-xs text-gray-600 sm:flex-row">
          <p className="flex items-center gap-1.5">
            ساخته شده با
            <Heart size={13} className="text-blue-500" />و React
          </p>

          <p>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</p>

          {/* Back To Top */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-gray-500 transition hover:text-blue-400"
          >
            بازگشت به بالا
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
