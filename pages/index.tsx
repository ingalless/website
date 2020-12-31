import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <>
      <div className="h-96 pb-16">
        <Nav />
        <div className="py-20 px-8 space-y-6 container mx-auto">
          <h1 className="text-6xl text-purple-600 dark:text-purple-300 font-bold leading-none md:leading-6">
            Hey, I'm Jonny.
          </h1>
          <h2 className="text-gray-700 dark:text-gray-100 text-3xl">
            Web Developer
          </h2>
          <h3 className="text-purple-600 dark:text-purple-300 text-2xl">
            Building websites that grow with your business
          </h3>
          <p className="text-gray-400 dark:text-gray-500 text-xl">
            More to come soon...
          </p>
        </div>
      </div>
      <div className="hidden justify-center">
        <svg
          className="animate-bounce w-6 h-6 text-purple-100"
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
    </>
  );
}
