import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

//components
import Hero from "./Hero";
import MissionPage from "./MissionPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className={`${inter.className} flex-col bg-black flex w-full min-h-screen`}
    >
      <Hero />
      <MissionPage />
      <Footer />
    </main>
  );
}
