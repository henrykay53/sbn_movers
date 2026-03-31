import AboutHero from "./features/about/aboutHero";
import ServicesList from "./features/home/services";
import CoreValues from "./features/about/coreValues";
import Innovations from "./features/about/inovations";
import WhyChooseUs from "./features/home/whyChooseUs";
import CTA from "./features/home/cts";

export default function About() {
  return (
    <div className="">
      <AboutHero />
       <CoreValues />
      <ServicesList />
     
      <Innovations />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}