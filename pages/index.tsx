import Link from "next/link";
import { useEffect } from "react";
import { logEvent } from "../analytics";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Nav from "../components/nav";
import { LandingIllustration } from "../svg";

export default function IndexPage() {
  useEffect(() => {
    logEvent({ page: "Home", type: "VISIT" });
  }, []);
  return (
    <Layout
      title="Foveal Development - Bespoke Web Development"
      description="Bespoke Web Development based in Peterborough, Cambridgeshire. We provide solutions that grow with your business."
    >
      <div>
        <Nav />
        <div className="container mx-auto">
          <div className="pt-6 pb-12 lg:py-20 px-8 space-y-6 mx-auto block lg:grid lg:grid-cols-2 gap-x-16 max-w-7xl">
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-6xl text-gray-800 tracking-tighter font-semibold">
                Bespoke Solutions That{" "}
                <span className="animate-fade-in text-blue-800">
                  Drive Your Business To Success
                </span>
              </h2>
              <h3 className="text-gray-900 text-lg leading-snug">
                2020 has demonstrated that having an online presence is more
                important than ever before.
                <br />
                <span className="font-semibold">
                  Let's keep your business succeeding together.
                </span>
              </h3>
              <div className="block">
                <Link href="#contact">
                  <a className="md:max-w-xs rounded-sm bg-blue-900 hover:bg-blue-800 transition-colors text-white px-4 py-2 font-bold">
                    Get in Touch
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center space-y-8">
              <LandingIllustration />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <svg
          className="animate-bounce w-6 h-6 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      <Section
        bgImage={`url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.07'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      >
        <h3 className="text-xs font-semibold tracking-wide text-blue-800">
          SERVICES
        </h3>
        <div className="block space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">
              Web Development
            </h4>
            <p>
              With 5 years industry experience, you'll receive a website or web
              application built for you. We'd love to make your ideas come to
              life whilst providing guidance and solutions on important
              non-functional requirements including speed, scalability and
              security.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">JAMStack</h4>
            <p>
              The JAMStack is one of the web's emerging technologies - and for
              good reason. Users love fast and highly-available websites.
              Businesses love only paying for the processing they need. It's a
              win-win!
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">SEO</h4>
            <p>
              Ranking high on search engines can be a difficult and
              time-consuming task. Users are even more interested in keeping
              their data safe too. We're driven to get you ranking as high as
              possible improving your content along the way and making sure your
              users' privacy is protected.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">
              Development Consultancy
            </h4>
            <p>
              Have a legacy application that needs refactoring? Or perhaps you
              need a new feature in your back-office systems? With deep
              knowledge in programming languages across the stack and a strong
              understanding of cloud application development we're driven to
              keep your critical business systems running efficiently.
            </p>
          </div>
        </div>
      </Section>
      <Section fullWidth={true}>
        <div id="contact" className="max-w-6xl mx-auto">
          <Contact />
        </div>
      </Section>
      <footer className="pt-16 pb-4 px-8 text-gray-600 text-center font-hairline font-sm">
        <span>&copy; Foveal Development 2021</span>
      </footer>
    </Layout>
  );
}

interface SectionProps {
  bgImage?: string;
  fullWidth?: boolean;
}
const Section: React.FC<SectionProps> = ({
  children,
  bgImage,
  fullWidth = false,
}) => {
  const style = bgImage ? { background: bgImage } : null;
  return (
    <div style={style}>
      <section
        className={`my-16 container mx-auto py-16 ${
          fullWidth ? "px-2" : "px-8"
        }`}
      >
        {children}
      </section>
    </div>
  );
};
