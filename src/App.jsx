import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AppRoutes from "./routes";
import Loader from "./components/ui/loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // App owns the timing; AnimatePresence below lets the loader fade out
    // properly instead of being unmounted mid-animation.
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
        <AppRoutes />
      </BrowserRouter>

      <ToastContainer
        position="bottom-right"
        autoClose={4500}
        hideProgressBar
        newestOnTop
        closeButton={false}
        theme="light"
        toastClassName="!rounded-xl !text-sm !font-medium !shadow-lg"
      />
    </>
  );
}
