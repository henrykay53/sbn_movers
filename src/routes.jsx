import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import MainLayout from "./layout/mainLayout";
import ScrollToTop from "./components/shared/toScroll";
import PageTransition from "./components/shared/pageTransition";

export default function AppRoutes() {
  const { pathname } = useLocation();

  return (
    <MainLayout>
      <ScrollToTop />

      {/* Keyed on pathname so each navigation replays the fade */}
      <PageTransition key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </MainLayout>
  );
}
