import Image from "next/image";
import HeroSection from "@/sections/hero-page";
import AboutMe from "./components/aboutSection";
import MySkill from "./components/mySkill";
import MyPortofolio from "./components/Portofolio";
import MyExperiences from "./components/myExperiences";
import Testimoni from "./components/testimoni";
import ContactMe from "./components/contactMe";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
        <AboutMe />
        <MySkill />
        <MyPortofolio />
        <MyExperiences />
        <Testimoni />
        <ContactMe />
      </div>
    </div>
  );
}
