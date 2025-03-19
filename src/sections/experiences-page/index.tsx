export default function MyExperiencesPage() {
  return (
    <section className="w-screen min-h-[714px] flex flex-col items-center justify-center bg-[#111827] py-20 px-6 md:px-[165px]">
      {/* Wrapper Utama */}
      <div className="w-full max-w-[1126px] flex flex-col gap-10">
        {/* Wrapper Text */}
        <div className="w-full max-w-[730px] text-left">
          <h2 className="text-[32px] md:text-[42px] font-bold">
            <span>My</span> <span className="text-[#FACC15]">Experiences</span>
          </h2>
          <p className="text-[14px] md:text-[16px] drop-shadow-md leading-[24px] md:leading-[27px] text-[#6B7280] mt-2">
            <strong>With an International Relations background</strong>, I
            transitioned into web development, learning React, Next.js, and
            Node.js through hands-on projects.
          </p>
        </div>

        {/* Wrapper Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {/* Box 1 - Bachelor of International Relations */}
          <div className="w-full min-w-[200px] bg-[#020617] text-white rounded-lg flex flex-col justify-center p-6 md:p-8 shadow-md min-h-[250px]">
            <p className="text-sm text-gray-400">2019 - 2023</p>
            <h3 className="text-lg font-bold text-yellow-400 mt-1">
              Bachelor of International Relations
            </h3>
            <p className="text-sm font-semibold mt-1">
              UIN Syarif Hidayatullah Jakarta
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Studied diplomacy, politics, and global issues while developing
              analytical and problem-solving skills.
            </p>
          </div>

          {/* Box 2 - Social Media Specialist */}
          <div className="w-full min-w-[200px] bg-[#020617] text-white rounded-lg flex flex-col justify-center p-6 md:p-8 shadow-md min-h-[250px]">
            <p className="text-sm text-gray-400">2023 - 2024</p>
            <h3 className="text-lg font-bold text-yellow-400 mt-1">
              Social Media Specialist
            </h3>
            <p className="text-sm font-semibold mt-1">Wagginton</p>
            <p className="text-sm text-gray-400 mt-2">
              Managed social media strategies, improving engagement and digital
              presence.
            </p>
          </div>

          {/* Box 3 - Student in Purwadhika */}
          <div className="w-full min-w-[200px] bg-[#020617] text-white rounded-lg flex flex-col justify-center p-6 md:p-8 shadow-md min-h-[250px]">
            <p className="text-sm text-gray-400">2025 - Present</p>
            <h3 className="text-lg font-bold text-yellow-400 mt-1">
              Full-Stack Web Development Student
            </h3>
            <p className="text-sm font-semibold mt-1">
              Purwadhika Digital School
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Learning front-end and back-end development with React, Next.js,
              and backend technologies for a career transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
