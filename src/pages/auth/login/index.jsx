import { FaEyeSlash, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[35px] border-[6px] border-slate-300 shadow-xl px-8 py-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-3">
          {t("loginHeading")}
        </h2>

        <p className="text-center text-gray-500 mb-10">
          {t("loginSubtitle")}
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="w-full h-12 rounded-full border border-gray-300 pl-12 pr-5 outline-none focus:border-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder={t("passwordPlaceholder")}
              className="w-full h-12 rounded-full border border-gray-300 px-5 pr-12 outline-none focus:border-yellow-400"
            />

            <FaEyeSlash className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="hidden peer" />

              <FaCheckCircle className="text-black text-lg" />

              <span>{t("rememberMe")}</span>
            </label>

            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              {t("forgotPassword")}
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full h-12 rounded-full bg-yellow-300 hover:bg-yellow-400 font-semibold transition duration-300">
            {t("logIn")}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-400 text-sm">{t("or")}</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full h-12 rounded-full border border-gray-300 hover:bg-gray-100 font-medium transition"
          >
            {t("continueWithGoogle")}
          </button>
        </form>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-500 mt-24">
          {t("noAccount")}{" "}
          <Link to="/registration">
            <a
              href="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              {t("signUp")}
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
