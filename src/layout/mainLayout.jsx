import Navbar from "../components/navigation/navbar";
import Footer from "./footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}


