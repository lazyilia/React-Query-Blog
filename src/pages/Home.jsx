function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen p-8 text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Blog</h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        This is a simple blog built with{" "}
        <span className="text-blue-400 font-semibold">React Router</span> and{" "}
        <span className="text-blue-400 font-semibold">React Query</span>.
      </p>
    </div>
  );
}

export default Home;
