export function AboutHeroSection() {
  return (
    <section className="mx-auto max-w-6xl w-full pb-32 px-5 md:px-0 flex items-end justify-between">
      <div className="max-w-xl">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          Who am I?
        </h1>

        <div className="max-w-xl font-medium">
          <p className="mt-10">
            Hey there! {"Let's"} get straight to it! {"I'm"} Casper, a motivated frontend developer
            and student based in Belgium. I started back when I was a{" "}
            <br className="sm:inline hidden" /> 14-year-old kid that had an extreme passion for
            creating stuff, building simple static web pages and expanding my CSS knowledge by
            recreating awesome designs. {"I've"} continued to grow and evolve as a developer, taking
            on new challenges and learning the latest technologies along the way.
          </p>

          <p className="mt-4">
            Now, at the age of 18, four years after starting my web development journey, {"I'm"}{" "}
            building cutting-edge web applications using the latest technologies such as React.js,
            Next.js, TypeScript, and much more.
          </p>

          <p className="mt-4">
            When {"I'm"} not in full-on developer mode, you will find me blasting down a dirt track
            or the streets of my city. {"There's"} nothing quite like the rush of adrenaline that
            comes from going ultra-fast, and for me, {"there's"} no better way to experience that
            than on my trusty mountain bike.
          </p>
        </div>
      </div>

      <svg
        className="hidden md:block opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 400 210"
        width="450"
        height="210"
        xmlSpace="preserve"
      >
        <g>
          <ellipse fill="#353030" cx="57.31" cy="138.91" rx="57.31" ry="57.09" />
          <line
            opacity="0.51"
            fill="none"
            strokeWidth="2"
            stroke="#e97451"
            x1="86.48"
            y1="188.06"
            x2="69.22"
            y2="160.74"
          />
        </g>
        <g>
          <ellipse fill="#353030" cx="342.69" cy="138.91" rx="57.31" ry="57.09" />
          <line
            opacity="0.51"
            fill="none"
            strokeWidth="2"
            stroke="#e97451"
            x1="371.86"
            y1="188.06"
            x2="354.6"
            y2="160.74"
          />
        </g>
        <polygon
          fill="#101010"
          points="150.47,24.98 184.85,84.3 219.24,143.63 150.47,143.63 81.69,143.63 116.08,84.3 	"
        />
        <polygon
          fill="#101010"
          className="fill-accent transition outline-none"
          points="246.58,143.63 206.99,75.33 167.41,7.04 246.58,7.04 325.75,7.04 286.16,75.33 	"
        />
        <line
          fill="none"
          stroke="#353030"
          strokeWidth="3"
          strokeMiterlimit="10"
          x1="138.57"
          y1="7.04"
          x2="57.31"
          y2="7.04"
        />
        <ellipse fill="#353030" cx="345.63" cy="7.04" rx="7.07" ry="7.04" />
      </svg>
    </section>
  );
}
