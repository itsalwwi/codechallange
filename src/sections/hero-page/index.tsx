import Image from "next/image";
import ButtonContact from "@/app/components/buttonContact";

export default function HeroSection() {
  return (
    <section className="w-screen min-h-[619px] flex items-center justify-center bg-[#111827] py-20 px-6 md:px-[165px]">
      {/* box pembungkus utama */}
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 gap-10 text-center md:text-left">
        {/* box teks */}
        <div className="max-w-md flex flex-col gap-6">
          {/* hello welcome */}
          <div className="text-[#EAB308] text-base">Hello, welcome</div>

          {/* nama dan deskripsi */}
          <div className="space-y-2">
            <div className="text-[42px] text-white leading-[64px] font-bold">
              I'm Anderson Coper
            </div>
            <p className="text-[16px] drop-shadow-md leading-[27px] text-[#6B7280]">
              <strong>Full Stack Web Developer</strong> specializing in building
              dynamic websites and seamless user experiences with clean,
              efficient code.
            </p>
          </div>

          {/* button contact me */}
          <div className="flex justify-center md:justify-start">
            <ButtonContact
              text="Contact Me"
              href="/"
              className="h-[43px] w-[123px] rounded-[4px] text-[16px] flex items-center justify-center text-center leading-[27px]"
            />
          </div>
        </div>

        {/* photo profile */}
        <div className="w-full min-w-[300px] max-w-[427px] h-auto">
          <Image
            alt="Anderson Coper"
            src="/images/profile_anderson.png"
            width={427}
            height={427}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
