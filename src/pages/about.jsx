import AboutHero from "./features/about/aboutHero";
import ServicesList from "../components/shared/services";
import CoreValues from "./features/about/coreValues";
import Innovations from "./features/about/inovations";
import WhyChooseUs from "../components/shared/whyChooseUs";
import CTA from "./features/home/cts";

export default function About() {
  return (
    <>
      <AboutHero />
      <CoreValues />
      <ServicesList />
      <Innovations />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
