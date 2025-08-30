import { Outlet } from "react-router-dom";
import Navpars from "./Navpars";
import Headers from "./Hedars";
import Footer from "./Footer";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  return (
    <div className="contenars">
      <div className="fix">
        <Headers />
        <Navpars />
      </div>
    <ScrollToTop/>

      <Outlet />   
      <Footer />
    </div>
  );
}
