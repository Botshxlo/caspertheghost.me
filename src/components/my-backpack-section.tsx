export function MyBackpackSection({ myBackpack }: { myBackpack: [string, string[]][] }) {
  return (
    <section id="skills">
      <h2 className="section-title">My Backpack</h2>

      <p className="my-4 text-secondary-light">
        You can find the list of my top skills below.{"I'm"} also open to learn more frontend
        related frameworks, libraries, languages, etc!
      </p>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {myBackpack.map(([header, items]) => {
          return (
            <div key={header} className="flex flex-col my-3 sm:my-0">
              <header className="mb-1">
                <h3 className="text-2xl font-semibold">{header}</h3>
              </header>

              <ul>
                {items.map((item) => (
                  <li className="my-1" key={item}>
                    <p className="text-secondary-light">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
