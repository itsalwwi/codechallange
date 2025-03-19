import Image from "next/image";
export default function PortofolioPage() {
  return (
    <section className="w-screen min-h-[800px] flex justify-center px-6 md:px-0">
      {/* Wrapper Utama */}
      <div className="w-full max-w-[1110px] h-auto flex flex-col pt-20 items-center text-center gap-6 md:gap-10">
        {/* Wrapper Text */}
        <div className="max-w-[469px] flex flex-col items-center">
          <h2 className="text-[32px] md:text-[42px] font-bold">
            <span>Personal</span>{" "}
            <span className="text-[#FACC15]">Project</span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-center drop-shadow-md leading-[24px] md:leading-[27px] text-[#6B7280] mt-2">
            <strong>Created a simple and responsive personal website</strong>{" "}
            using React, TypeScript, and Next.js to share my projects, skills,
            and background.
          </p>
        </div>

        {/* Gambar Portofolio */}
        <div className="w-full max-w-[900px]">
          <Image
            alt="Website"
            src="/images/Portofolio.png"
            width={1920}
            height={1080}
            className="shadow-md object-contain w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
