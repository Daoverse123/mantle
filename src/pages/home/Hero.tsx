import React from "react";
import { DM_Sans, Montserrat } from "next/font/google";

//fonts
const dm_sans = DM_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

//components
import Nav from "@/components/Nav";

function Hero() {
  return (
    <section className="w-full flex flex-col h-screen bg-no-repeat bg-cover bg-[url('/hero-bg.png')] max-[425px]:bg-[url('/hero-bg-m.png')]">
      <Nav />
      <div className="w-[1300px] max-[1320px]:w-full flex flex-col h-screen mx-auto justify-center px-[16px]">
        <h1
          className={`text-white max-[1320px]:text-[32px] text-[64px] ${dm_sans.className} font-bold m-0 p-0`}
        >
          Mass Adoption of <br></br> Token-Governed Technologies
        </h1>
        <p
          className={`text-white text-[24px] max-[1320px]:text-[16px] w-[1020px] max-[1320px]:w-[90%] max-[1320px]:mt-[16px] ${montserrat.className} max-[940px]:mb-14`}
        >
          With Mantle Network, an Ethereum rollup, Mantle Treasury and a token
          holder governed roadmap for products and initiatives.
        </p>
        <button className="hidden max-[940px]:block w-[147px] bg-gradient-to-r from-teal-500 to-cyan-300 text-white px-7 py-2  rounded-3xl">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
