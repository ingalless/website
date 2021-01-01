import { useEffect } from "react";
import { logEvent } from "../analytics";
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
      <div className="">
        <Nav />
        <div className="container mx-auto">
          <div className="pt-6 pb-12 lg:py-20 px-8 space-y-6 mx-auto block lg:grid lg:grid-cols-2 gap-x-16 max-w-7xl">
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-6xl text-gray-800 tracking-tighter font-semibold">
                Bespoke Solutions That{" "}
                <span className="text-blue-600">
                  Drive Your Business To Success
                </span>
              </h2>
              <h3 className="text-gray-700 text-lg leading-snug">
                The web becomes more and more complex each day. Making a bad
                decision impacts your company's success. Don't let your tech
                slow you down.
              </h3>
              <div className="block">
                <button className="md:max-w-xs rounded-sm bg-gray-500  text-white px-4 py-2 font-bold">
                  Accepting Projects Soon
                </button>
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
      <div className="container mx-auto py-16 px-8">
        <h3 className="text-xs font-semibold tracking-wide text-gray-600">
          SERVICES
        </h3>
        <div className="block space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">
              1. Web Development
            </h4>
            <p>
              We can provide your business with a unique website or web
              application. We'd love to make your ideas come to life, whilst
              providing guidance on important matters such as speed, scaling and
              security.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">
              2. JAMStack
            </h4>
            <p>
              The JAMStack is one of the web's emmerging technologies. Users
              love fast and highly-available websites - and so does Google!
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">3. SEO</h4>
            <p>
              Ranking high on search engines can be hard. We're driven to get
              you ranking as high as possible, improving your content along the
              way.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800">
              4. Legacy Application Migration
            </h4>
            <p>
              Have a legacy application that needs refactoring? Let us help you.
              With deep knowledge of PHP, Node.JS and Cloud Infrastructure we're
              here to bring your critical applications to the bleeding edge.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
