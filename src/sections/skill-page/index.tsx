import Image from "next/image";

export default function MySkillPage() {
  return (
    <section className="w-screen min-h-[759px] flex items-center justify-center bg-[#111827] py-20 px-6 md:px-20">
      {/* Wrapper Utama */}
      <div className="flex flex-col max-w-[1110px] w-full h-auto gap-6 md:gap-12">
        {/* Wrapper Text */}
        <div className="w-full max-w-[461px] text-center md:text-left">
          <h2 className="text-[32px] md:text-[42px] font-bold">
            <span>My</span> <span className="text-[#FACC15]">Skill</span>
          </h2>
          <p className="text-[14px] md:text-[16px] drop-shadow-md leading-[24px] md:leading-[27px] text-[#6B7280] mt-2">
            I specialize in building modern, scalable web applications with
            clean code, optimized performance, and seamless user experience.
          </p>
        </div>

        {/* Wrapper Box */}
        <div className="w-full max-w-[1110px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Box 1 - Front-End Skills */}
          <div className="w-full bg-[#020617] text-white rounded-lg flex flex-col items-center justify-center text-center p-6 md:p-8 shadow-md">
            <span className="text-[40px]">🎨</span>
            <h3 className="text-lg md:text-xl font-bold mt-4">
              Front-End Skills
            </h3>
            <p className="text-[14px] md:text-sm text-gray-400 mt-2">
              Building responsive UIs with HTML, CSS, JavaScript, React, and
              Angular.
            </p>
          </div>

          {/* Box 2 - Back-End Skills */}
          <div className="w-full bg-[#020617] text-white rounded-lg flex flex-col items-center justify-center text-center p-6 md:p-8 shadow-md">
            <span className="text-[40px]">⚙️</span>
            <h3 className="text-lg md:text-xl font-bold mt-4">
              Back-End Skills
            </h3>
            <p className="text-[14px] md:text-sm text-gray-400 mt-2">
              Developing secure APIs and databases with Node.js, Express,
              Django, and Ruby on Rails.
            </p>
          </div>

          {/* Box 3 - DevOps & Tools */}
          <div className="w-full bg-[#020617] text-white rounded-lg flex flex-col items-center justify-center text-center p-6 md:p-8 shadow-md">
            <span className="text-[40px]">🛠️</span>
            <h3 className="text-lg md:text-xl font-bold mt-4">
              DevOps & Tools
            </h3>
            <p className="text-[14px] md:text-sm text-gray-400 mt-2">
              Optimizing workflows with Docker, Git, Jenkins, AWS, and CI/CD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
