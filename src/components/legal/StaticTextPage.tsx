import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

type StaticTextSection = {
  heading: string;
  body: string[];
};

type StaticTextPageProps = {
  title: string;
  description: string;
  sections: StaticTextSection[];
};

const StaticTextPage = ({ title, description, sections }: StaticTextPageProps) => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />

      <div className="container relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-border/60 bg-card/80 p-8 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.45)] backdrop-blur md:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Legal
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {title}
              </h1>
              <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>

            <div className="mt-12 space-y-10">
              {sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default StaticTextPage;
