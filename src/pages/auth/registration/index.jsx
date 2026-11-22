import { FaEyeSlash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[35px] border-[6px] border-slate-300 shadow-xl px-8 py-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("createAccount")}
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="w-full h-12 rounded-full border border-gray-300 px-5 outline-none focus:border-yellow-400"
          />

          {/* Phone */}
          <div className="flex items-center border border-gray-300 rounded-full h-12 px-4">
            <div className="flex items-center gap-2 border-r pr-3">
              <span className="text-xl">🇬🇧</span>
              <span className="text-gray-500">▼</span>
            </div>

            <input
              type="text"
              placeholder={t("phonePlaceholder")}
              className="flex-1 pl-4 outline-none"
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

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              placeholder={t("confirmPassword")}
              className="w-full h-12 rounded-full border border-gray-300 px-5 pr-12 outline-none focus:border-yellow-400"
            />

            <FaEyeSlash className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" className="hidden peer" />

            <FaCheckCircle className="text-black text-lg" />

            <span>
              {t("accept")}{" "}
              <a href="/" className="text-blue-600 hover:underline">
                {t("legalAgreements")}
              </a>
            </span>
          </label>

          {/* Button */}
          <button className="w-full h-12 rounded-full bg-yellow-300 hover:bg-yellow-400 font-semibold transition duration-300">
            {t("signUp")}
          </button>
        </form>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-500 mt-28">
          {t("alreadyHaveAccount")}{" "}
          <Link
            to="/login"
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            {t("logIn")}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
