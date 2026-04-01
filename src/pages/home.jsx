import Hero from "./features/home/hero";
import Services from "../components/shared/services";
import WhyChooseUs from "./features/home/whyChooseUs";
import Testimonials from "./features/home/testimonials";
import CTA from "./features/home/cts";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}