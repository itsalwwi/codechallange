import HeroSectionPage from "@/sections/hero-page";
import Image from "next/image";
import ButtonContact from "./buttonContact";
export default function HeroSection() {
  return (
    <section className="w-screen h-[619px] flex items-center justify-center bg-[#111827] py-[196px] px-[165px]">
      {/* box pembungkus #1 */}
      <div className="max-w-screen-xl w-full flex items-center justify-center px-6">
        {/* box pembungkus #2 */}
        <div className="max-w-md flex flex-col gap-6">
          {/* hello welcome */}
          <div className="text-[#EAB308] text-base">Hello, welcome</div>

          {/* box pembungkus #3 */}
          <div className="space-y-2">
            {/* name */}
            <div className="text-[42px] leading-[64px] font-bold">
              I'm Anderson Coper
            </div>

            {/* desc */}
            <p className="text-[16px] drop-shadow-md leading-[27px] text-[#6B7280]">
              <strong>Full Stack Web Developer</strong> specializing in building
              dynamic websites and seamless user experiences with clean,
              efficient code.
            </p>
          </div>

          {/* button contact me */}
          <ButtonContact
            text="Contact Me"
            href="/"
            className="h-[43px] w-[123px] rounded-[4px] text-[16px] flex items-center justify-center text-center leading-[27px]"
          />
        </div>

        {/* photo profile */}
        <div className="h-[427px] w-[427px] flex-shrink-0">
          <Image
            alt="Anderson Coper"
            src="/images/profile_anderson.png"
            width={427}
            height={427}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
