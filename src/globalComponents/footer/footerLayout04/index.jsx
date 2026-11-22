
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const FooterLayout04 = () => {
  const { i18n } = useTranslation();
  const widgetRef = useRef(null);

  const localeMap = {
    en: "en-US",
    fr: "fr-FR",
    de: "de-DE",
    el: "el-GR",
    es: "es-ES",
    tr: "tr-TR",
    pt: "pt-PT",
  };

  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const language = currentLanguage.split("-")[0];
  const trustpilotLocale = localeMap[language] || "en-US";

  useEffect(() => {
    const scriptId = "trustpilot-widget-script";
    let script = document.getElementById(scriptId);
    const hideWidgetScrollbar = () => {
      if (!widgetRef.current) return;

      widgetRef.current.querySelectorAll("iframe").forEach((iframe) => {
        iframe.style.width = "100%";
        iframe.style.height = "52px";
        iframe.style.border = "0";
        iframe.style.overflow = "hidden";
        iframe.setAttribute("scrolling", "no");
      });
    };

    const loadWidget = () => {
      if (window.Trustpilot && widgetRef.current) {
        window.Trustpilot.loadFromElement(widgetRef.current, true);
        window.setTimeout(hideWidgetScrollbar, 500);
      }
    };

    if (script) {
      if (window.Trustpilot) {
        loadWidget();
      } else {
        script.addEventListener("load", loadWidget);
      }

      return () => {
        script?.removeEventListener("load", loadWidget);
      };
    }

    script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    script.onload = loadWidget;

    document.body.appendChild(script);

    return () => {
      script?.removeEventListener("load", loadWidget);
    };
  }, [trustpilotLocale]);

  return (
    <div
      ref={widgetRef}
      className="trustpilot-widget mx-auto flex w-full justify-center md:max-w-[220px]"
      data-locale={trustpilotLocale}
      data-template-id="YOUR_TEMPLATE_ID"
      data-businessunit-id="YOUR_BUSINESS_UNIT_ID"
      data-style-height="52px"
      data-style-width="100%"
    />
  );
};

export default FooterLayout04;
