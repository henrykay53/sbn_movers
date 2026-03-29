import Navbar from "../components/navigation/navbar";
import WhatsAppButton from "../components/ui/whatsappButton";
import Footer from "./footer";


export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton/>
      <Footer />
    </>
  );
}


