import React, { useEffect } from "react";
// import { Button } from "react-bootstrap";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import OurService from "../components/OurService/OurService";
import WhyUs from "../components/WhyUs/WhyUs";
import Testimony from "../components/Testimony/Testimony";
import service from "../service";
// import PageNav from "../components/PageNav";
import Anchor from "../components/Anchor";
import CarChoices from "../components/CarChoices/CarChoices";

export default function LandingPage() {
  useEffect(() => {
    (async function () {
      try {
        const response = await service.auth.post("/admin/auth/login", {
          email: "admin@bcr.io",
          password: "123456",
        });

        console.log(response);

        if (response) localStorage.setItem("auth", response.access_token);
      } catch (error) {
        console.error(error?.message);
      }
    })();
  }, []);

  return (
    <main>
      {/* <PageNav /> */}
      <Anchor />
      <Header />
      <OurService />
      <WhyUs />
      <Testimony />
      <Banner />
      <Faq />
      <Footer />
      <CarChoices />
    </main>
  );
}
