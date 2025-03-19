import Image from "next/image";

export default function TestimonialPage() {
  return (
    <section className="w-screen min-h-[714px] flex flex-col justify-center items-center py-20 px-6 md:px-[165px]">
      {/* Wrapper Utama */}
      <div className="w-full max-w-[1126px] flex flex-col gap-10">
        {/* Header */}
        <div className="w-full text-center items-center">
          <h2 className="text-[32px] md:text-[42px] font-bold">
            <span>Trusted</span> <span className="text-[#FACC15]">Reviews</span>
          </h2>
          <p className="text-[14px] md:text-[16px] drop-shadow-md leading-[24px] md:leading-[27px] text-[#6B7280] mt-2">
            <strong>Honest feedback</strong> from clients and peers,
            highlighting my skills, work ethic, and impact on their projects.
          </p>
        </div>

        {/* Wrapper Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {/* Box 1 - Invincible */}
          <div className="w-full min-w-[200px]  bg-[#111827] text-white rounded-lg flex flex-col justify-center p-6 md:p-8 shadow-md min-h-[250px]">
            <div className="flex items-center gap-4">
              <Image
                alt="Invincible"
                src="/images/invincible.webp"
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12 bg-gray-700"
              />
              <div>
                <h3 className="text-lg font-bold text-yellow-400">
                  Invincible{" "}
                </h3>
                <p className="text-sm text-gray-400">Superhero & ex-Devloper</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-4">
              "I fight interdimensional warlords, but async/await? That’s black
              magic. Now, this website handles my mission logs so I can stop
              ‘debugging’ with my fists."
            </p>
          </div>

          {/* Box 2 - angstrom levy */}
          <div className="w-full min-w-[200px] bg-[#111827] text-white rounded-lg flex flex-col justify-center p-6 md:p-8 shadow-md min-h-[250px]">
            <div className="flex items-center gap-4">
              <Image
                alt="Cecil Stedman"
                src="/images/AngstromLevy.webp"
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12 bg-gray-700"
              />
              <div>
                <h3 className="text-lg font-bold text-yellow-400">
                  Angstrom Levy
                </h3>
                <p className="text-sm text-gray-400">Master of Dimension</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-4">
              "I explore infinite realities, but setting up an API call?
              Impossible. This database logs my universes so I stop opening
              portals to 500 Internal Server Errors."
            </p>
          </div>

          {/* Box 3 - Omni-Man */}
          <div className="w-full min-w-[200px]  bg-[#111827] text-white rounded-lg flex flex-col justify-center p-6 md:p-8 shadow-md min-h-[250px]">
            <div className="flex items-center gap-4">
              <Image
                alt="Omni-Man"
                src="/images/omni-man.webp"
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12 bg-gray-700"
              />
              <div>
                <h3 className="text-lg font-bold text-yellow-400">Omni-Man</h3>
                <p className="text-sm text-gray-400">Viltrumite Warrior</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-4">
              "I can destroy civilizations, but .map() broke me. Now, this site
              organizes my invasion plans without me ‘accidentally’ flattening a
              JSON array… or a city."
            </p>
          </div>

          {/* Box 4 - Conquest */}
          <div className="w-full min-w-[200px]  bg-[#111827] text-white rounded-lg flex flex-col justify-center p-6 md:p-8 shadow-md min-h-[250px]">
            <div className="flex items-center gap-4">
              <Image
                alt="Conquest"
                src="/images/conquest.webp"
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12 bg-gray-700"
              />
              <div>
                <h3 className="text-lg font-bold text-yellow-400">Conquest</h3>
                <p className="text-sm text-gray-400">Viltrumite Warlord</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-4">
              "I’ve conquered galaxies, but I lost a battle to CSS Grid. Now,
              this site generates my war strategies without me ‘flexing’ the
              wrong way… literally."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
