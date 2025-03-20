import Image from "next/image";
import ButtonContact from "@/app/components/buttonContact";

export default function AboutMePage() {
  return (
    <section className="w-screen min-h-[704px] flex items-center justify-center p-12 md:px-20">
      {/* Wrapper Utama */}
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 gap-10 md:gap-16 text-center md:text-left transition-all duration-300">
        {/* Wrapper Foto */}
        <div className="relative w-full min-w-[300px] max-w-[427px] h-auto transition-all duration-300 scale-100 md:scale-90 sm:scale-75">
          {/* Aksen border kuning sebagai shadow */}
          <div className="absolute bottom-[-12px] left-[-12px] w-full h-full rounded-[24px] border-[16px] bg-[#FACC15] border-[#FACC15]"></div>
          {/* Foto profile */}
          <Image
            alt="Profile Picture"
            src="/images/profile_2.png"
            width={427}
            height={427}
            className="relative z-10 rounded-[24px] object-cover w-full h-auto"
          />
        </div>

        {/* Wrapper Text */}
        <div className="max-w-md flex flex-col gap-6 transition-all duration-300 scale-100 md:scale-90 sm:scale-75">
          {/* Title */}
          <div>
            <h2 className="text-[32px] md:text-[42px] font-bold">
              <span className=" text-white">About</span>{" "}
              <span className="text-[#FACC15]">Me</span>
            </h2>
          </div>

          {/* Description & Button */}
          <div className="flex flex-col gap-6 md:gap-8 text-[#6B7280]">
            {/* Description */}
            <p className="text-[14px] md:text-[16px] drop-shadow-md leading-[24px] md:leading-[27px]">
              I have always been fascinated by how the web works, leading me to
              explore full-stack development. From designing interactive
              interfaces to handling backend logic, I enjoy building scalable
              and efficient applications that deliver seamless user experiences.
            </p>
            <p className="text-[14px] md:text-[16px] drop-shadow-md leading-[24px] md:leading-[27px]">
              <strong>Skilled in JavaScript, React, Node.js, and Python</strong>
              , I focus on writing clean, maintainable code while ensuring
              timeliness, attention to detail, and clear communication in every
              project.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <ButtonContact
                text="Contact Me"
                href="/"
                className="h-[43px] w-[123px] rounded-[4px] text-[16px] flex items-center justify-center text-center leading-[27px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
