import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <>
      <div className="min-h-landing">
        <Nav />
        <div className="py-20 px-8 space-y-6 container mx-auto">
          <h1 className="text-6xl text-white">
            Hey! I'm <span className="text-purple-300 font-bold">Jonny</span>
          </h1>
          <h2 className="text-gray-100 text-3xl">Maker of all things web</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <svg
          className="animate-bounce w-6 h-6 text-purple-100"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </>
  );
}
