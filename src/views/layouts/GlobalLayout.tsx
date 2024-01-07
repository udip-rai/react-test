import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const GlobalLayout = () => {
  return (
    <div className="global-layout grid grid-rows-[70px_minmax(calc(100vh-70px-70px),1fr)_70px]">
      {/* Header section */}
      <Header />

      {/* Body section */}
      <section className="body-outlet p-5">
        <Outlet />
      </section>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
