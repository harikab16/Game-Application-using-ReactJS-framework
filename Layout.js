import React from "react";
import Header from "../components/Header";
import Login from "./Login";
// import Content from "../components/Content";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        {/* { <Login/> } */}
        <Outlet />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
