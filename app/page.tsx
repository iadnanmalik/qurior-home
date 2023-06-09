"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
      <div className="container">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4HEDK8XNGJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4HEDK8XNGJ');
        `}
        </Script>
      </div>
      <ScrollUp />
      <div id="home-section">
        {" "}
        <Hero />
      </div>

      <div id="services-section">
        <Features />
      </div>
      {/* <Video /> */}
      {/* <div id="services-section"><Brands /></div> */}
      <div id="work-section">
        {" "}
        <AboutSectionOne />
      </div>
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
}
