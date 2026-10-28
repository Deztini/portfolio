export function About() {
  return (
    <section id="about" className="px-5 md:px-15">
      <div className="flex flex-col gap-10 lg:flex-row items-start lg:gap-50">
        <div className="text-muted text-small mt-2">02 / ABOUT</div>
        <div className="max-w-230"> 
          <h1 className="text-display text-wrap">
            I like owning the whole problem.
          </h1>
          <p className="my-10 text-[20px]">
            I’m a software engineer who works across mobile, web, backend
            systems and the infrastructure that keeps them running. I care about
            software that is reliable, fast, simple and enjoyable to use—not
            just on launch day, but after months of real use. I’m comfortable
            moving from a React Native screen to an API contract, a database
            query or a deployment failure. I ship in small, understandable steps
            and keep the maintenance cost in view while I build. Outside the
            editor, I’m usually reorganising a playlist or noticing the one
            interaction in an app that could have been one tap shorter. NOW
            Building the next version of StudExpress and getting deeper into
          </p>
        </div>
      </div>

      <div className="border-b border-gray-400 mt-30 mb-18" />
    </section>
  );
}
