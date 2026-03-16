import { useState } from "react";
import { Link } from "react-router-dom";
import appStore from "/appstore.svg";
import logo from "/logo-white.png";
import playStore from "/playstore.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
  // { label: "Facebook", href: "https://www.facebook.com/finance2049" },
  // { label: "Instagram", href: "https://www.instagram.com/finance2049com" },
  // { label: "TikTok", href: "https://www.tiktok.com/@finance2049" },
  // { label: "𝕏 / Twitter", href: "https://x.com/finance2049com" },
  // { label: "LinkedIn", href: "https://www.linkedin.com/company/finance2049" },
  // { label: "Discord", href: "https://discord.gg/XdXRAHUKMh" },
];

const Footer = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <>
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
                      className="cursor-pointer text-base text-white/60 transition-all duration-200 hover:text-white hover:opacity-80"
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
                      className="cursor-pointer text-base text-white/60 transition-all duration-200 hover:text-white hover:opacity-80"
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
                    <Link
                      to={link.href}
                      className="cursor-pointer text-base text-white/60 transition-all duration-200 hover:text-white hover:opacity-80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={() => setIsSupportOpen(true)}
                    className="cursor-pointer text-base text-white/60 transition-all duration-200 hover:text-white hover:opacity-80"
                  >
                    Support
                  </button>
                </li>
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
                          className="cursor-pointer text-base text-white/60 transition-all duration-200 hover:text-white hover:opacity-80"
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
              <Link to="/privacy-policy" className="transition-colors hover:text-white/70">
                Privacy
              </Link>
              <Link to="/terms-and-conditions" className="transition-colors hover:text-white/70">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isSupportOpen} onOpenChange={setIsSupportOpen}>
        <DialogContent className="border-white/10 bg-zinc-950 text-white shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)]">
          <DialogHeader className="space-y-3 text-left">
            <DialogTitle className="text-2xl font-semibold tracking-tight text-white">
              Need help?
            </DialogTitle>
            <DialogDescription className="text-sm leading-6 text-white/65">
              We keep support simple. If you have a question,{" "}
              found a <a href="https://github.com/LukaGiorgadze/finance2049/issues" target="_blank" className="cursor-pointer font-medium text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-80">bug</a>,
              or want to suggest a
              feature, email us at{" "}
              <a
                href="mailto:hi@finance2049.com"
                className="cursor-pointer font-medium text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-80"
              >
                hi@finance2049.com
              </a>
              .
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
            <p className="text-sm leading-6 text-white/80">
              Prefer a faster back-and-forth? Join our{" "}
              <a
                href="https://discord.gg/XdXRAHUKMh"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer font-medium text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-80"
              >
                Discord community
              </a>{" "}
              to ask questions, share feedback, and follow product updates.
            </p>
            <p className="text-sm leading-6 text-white/55">
              We read every message and use your feedback to shape what Finance 2049 builds next.
            </p>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                className="w-full cursor-pointer border border-white/10 bg-white/[0.06] text-white transition-all duration-200 hover:bg-white/[0.1] sm:w-auto"
              >
                OK
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
