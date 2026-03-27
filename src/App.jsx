import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import AppRoutes from "./routes";
import Loader from "./components/ui/loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <AppRoutes />
    </BrowserRouter>
  );
}