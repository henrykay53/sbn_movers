import AboutHero from "./features/about/aboutHero";
import ServicesList from "./features/home/services";
import CoreValues from "./features/about/coreValues";
import Innovations from "./features/about/inovations";
import WhyChooseUs from "./features/home/whyChooseUs";

export default function About() {
  return (
    <div className="space-y-20 py-16 sm:py-20">
      <AboutHero />
       <CoreValues />
      <ServicesList />
     
      <Innovations />
      <WhyChooseUs />
    </div>
  );
}