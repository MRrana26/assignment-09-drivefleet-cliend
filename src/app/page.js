import AboutSection from "@/Components/AboutSection";
import BannerSection from "@/Components/BannerSection";
import CarsSection from "@/Components/CarsSection";
import HowItWorks from "@/Components/HowItWorks";


export default function Home() {
  return (
    <div>
      <BannerSection/>
      <CarsSection/>
      <AboutSection/>
      <HowItWorks/>
    </div>
  );
}
