import Image from "next/image";
import Playground from "@/Components/PlayGround/PlayGround";
import Hero from "@/Components/Home/HeroSection/HeroSection";
import Developer from "@/Components/Home/Developer";
import Documentation from "@/Components/Documentation/Documentation";

export default function Home() {
  
  return (
    // flex min-h-screen flex-col  justify-between
    <main className="">
   
        <Hero/>
        <Playground/>
        <Developer/>
        <Documentation/>
    </main>
  );
}
