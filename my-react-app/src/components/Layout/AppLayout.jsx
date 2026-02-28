import { Outlet } from "react-router-dom";
import { Header } from "../UI/Header";
import { Footer } from "../UI/Footer";

export const AppLayout = () => {
  return (
    <>
      <Header />

      <main style={{ minHeight: "100vh", paddingTop: "20px" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
