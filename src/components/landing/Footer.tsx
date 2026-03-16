import appStore from "@/assets/appstore.svg";
import logo from "@/assets/logo-white.png";
import playStore from "@/assets/playstore.svg";

const navLinks = [
  { label: "Why", href: "#why" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#reviews" },
  // { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const communityLinks = [
  { label: "GitHub", href: "https://github.com/LukaGiorgadze/finance2049" },
  { label: "Discord", href: "https://discord.gg/XdXRAHUKMh" },
];

const infoLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Support", href: "#faq" },
];

const socialLinks = [
  // { label: "Facebook", href: "https://www.facebook.com/finance2049" },
  // { label: "Instagram", href: "https://www.instagram.com/finance2049com" },
  // { label: "TikTok", href: "https://www.tiktok.com/@finance2049" },
  // { label: "𝕏 / Twitter", href: "https://x.com/finance2049com" },
  // { label: "LinkedIn", href: "https://www.linkedin.com/company/finance2049" },
  // { label: "Discord", href: "https://discord.gg/XdXRAHUKMh" },
];

const Footer = () => (
  <footer id="footer" className="border-t border-accent dark:border-accent/40 bg-black text-white">
    <div className="container py-20 md:py-24">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Finance 2049" className="h-14 w-auto object-contain select-none pointer-events-none" />
              <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Finance 2049
              </span>
            </div>
            <p className="max-w-sm text-base leading-7 text-white/60">
              Portfolio tracking built for clarity, with cost basis, gains, and history in one
              clean view.
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <a
              href="https://apps.apple.com/app/finance2049/id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-white transition-all duration-300 ease-in-out"
            >
              <img
                src={appStore}
                alt="Download on the App Store"
                className="w-32 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] border border-white/10"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-white transition-all duration-300 ease-in-out"
            >
              <img
                src={playStore}
                alt="Get it on Google Play"
                className="w-32 rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] border border-white/10"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Navigation</h3>
          <ul className="mt-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Community</h3>
          <ul className="mt-6 space-y-4">
            {communityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-base text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Legal & Support</h3>
          <ul className="mt-6 space-y-4">
            {infoLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {socialLinks.length > 0 ? (
            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="text-lg font-semibold text-white">Follow</h3>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-base text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <p>© 2026. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-white/70">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-white/70">
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
