import Image from "next/image";
import Playground from "@/Components/PlayGround/PlayGround";
import Hero from "@/Components/Home/HeroSection/HeroSection";
import Developer from "@/Components/Home/Developer";

export default function Home() {
  
  return (
    // flex min-h-screen flex-col  justify-between
    <main className="">
   
        <Hero/>
        <Playground/>
        <Developer/>
        
    </main>
  );
}
