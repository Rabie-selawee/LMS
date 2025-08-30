import {  Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Home2 from "./Home2";
import About from "./About";
import CoursesStyle1 from "./CoursesStyle1";
import Contact from "./Contact";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home2" element={<Home2 />} />
          <Route path="AboutUs" element={<About/>} />
          <Route path="home" element={<Home/>} />
          <Route path="CoursesStyle1" element={<CoursesStyle1/>} />
          <Route path="Contact" element={<Contact/>} />

        </Route>
      </Routes>
  );
}
