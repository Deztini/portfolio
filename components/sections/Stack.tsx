export function Stack() {
  const stack = [
    {
      id: "01",
      category: "Mobile",
      tools: "React Native, Expo, EAS",
    },
    {
      id: "02",
      category: "Web",
      tools: "Next.js, React, TypeScript, TanStack Query, Tailwind CSS",
    },
    {
      id: "03",
      category: "Backend",
      tools: "Node.js, Express, REST APIs, PostgreSQL, MongoDB",
    },
  ];
  return (
    <section className="section-space px-5 md:px-15">
      <div className="flex flex-col gap-10 lg:flex-row items-start lg:gap-60">
        <div className="text-muted text-small mt-2">03 / STACK</div>

        <div className="w-full max-w-200">
          <h1 className="text-display">Tools I use to ship.</h1>
          <div className="border-b border-gray-400 mt-20 mb-18" />

          <div>
            {stack.map((st) => (
              <div key={st.id}>
                <div className="grid grid-cols-[32px_1fr] items-baseline gap-y-2 lg:grid-cols-[40px_140px_1fr] ">
                  <p className="text-muted text-small">{st.id}</p>
                  <h1 className="text-[20px]">{st.category}</h1>

                  <p className="text-meta text-muted text-small">{st.tools}</p>
                </div>

                <div className="border-b border-gray-400 my-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
