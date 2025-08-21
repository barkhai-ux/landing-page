"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "i18next";

export default function Home() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("mn");
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className="landing">
      <header className="landing_header">
        <div className="brand">
          <span className="brand_mark">▶</span>
          <span className="brand_name">SeeMedia</span>
        </div>
        <nav className="nav">
          <a href="#features">{t("Features")}</a>
          <a href="#catalog">{t("Catalog")}</a>
          <a href="#pricing">{t("Pricing")}</a>
        </nav>
        <div className="auth">
        {/* Make it work later */}
          
          {/* <button className="btn btn_text" onClick={() => handleLanguageChange(language === "en" ? "mn" : "en")}>{t("Sign in")}</button>
          <button className="btn btn_primary">{t("Start Free Trial")}</button> */}
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>{t("Unlimited movies, shows, and more.")}</h1>
          <p>{t("Watch anywhere. Cancel anytime.")}</p>
          <div className="store_badges">
            <a
              className="store_button apple"
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="store_logo apple"
                src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
                alt={`${t("Download on the")} ${t("App Store")}`}
                height="48"
              />
            </a>
            <a
              className="store_button google"
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="store_logo google"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt={`${t("Get it on")} ${t("Google Play")}`}
                height="48"
              />
            </a>
          </div>
          <div className="hero_art" aria-hidden>
            <div className="art_card" />
            <div className="art_card delay" />
            <div className="art_glow" />
          </div>
        </section>

        <section id="features" className="section">
          <div className="feature_grid">
            <div className="feature">
              <h3>{t("Personalized For You")}</h3>
              <p>{t("Smart recommendations based on your taste and mood.")}</p>
            </div>
            <div className="feature">
              <h3>{t("Offline Downloads")}</h3>
              <p>{t("Save titles and watch on the go without internet.")}</p>
            </div>
            <div className="feature">
              <h3>{t("4K + HDR")}</h3>
              <p>{t("Crystal-clear visuals with Dolby Atmos support.")}</p>
            </div>
            <div className="feature">
              <h3>{t("Multiple Profiles")}</h3>
              <p>{t("Create profiles for everyone at home, including kids.")}</p>
            </div>
          </div>
        </section>

        <section id="catalog" className="section catalog">
          <h2>{t("Popular Now")}</h2>
          <div className="poster_row">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="poster" />
            ))}
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <h2>{t("Choose your plan")}</h2>
          <div className="plans">
            <div className="plan">
              <h3>{t("Basic")}</h3>
              <p className="price">${t("7.99/mo")}</p>
              <ul>
                <li>{t("HD streaming")}</li>
                <li>{t("1 device at a time")}</li>
                <li>{t("Limited downloads")}</li>
              </ul>
              {/* <button className="btn btn_secondary">{t("Select")}</button> */}
            </div>
            <div className="plan popular">
              <div className="badge">{t("Popular")}</div>
              <h3>Standard</h3>
              <p className="price">$12.99/mo</p>
              <ul>
                  <li>{t("Full HD streaming")}</li>
                    <li>{t("2 devices at a time")}</li>
                    <li>{t("Unlimited downloads")}</li>
              </ul>
              {/* <button className="btn btn_primary">{t("Select")}</button> */}
            </div>
            <div className="plan">
              <h3>Premium</h3>
              <p className="price">$17.99/mo</p>
              <ul>
                <li>{t("4K + HDR streaming")}</li>
                <li>{t("4 devices at a time")}</li>
                <li>{t("Unlimited downloads")}</li>
              </ul>
              {/* <button className="btn btn_secondary">{t("Select")}</button> */}
            </div>
          </div>
        </section>


      </main>

      <footer className="footer_bar">
        <p>© {new Date().getFullYear()} Streamly</p>
        <div className="footer_links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Help</a>
        </div>
      </footer>
    </div>
  );
}
