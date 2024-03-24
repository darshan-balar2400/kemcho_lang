import type { Metadata } from "next";
import "./index.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/Components/Home/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Meta from "@/Components/Meta";
import { useRouter } from "next/navigation";
// import MobileNav from "@/Components/Home/MobileNav/MobileNav";
export const metadata: Metadata = {
  title: "KEMCHO - A Programming Language For Gujjus",
  description: `Coding with
  a touch of fun,
  A fun programming language written in typescript`,
  // icons:["/images/logo/rangoli.png"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const router = useRouter();
  return (
    <html lang="en">
      <head>
      {/* <link rel="icon"  */}
      <link rel="icon" href="/images/logo/rangoli.png" />
      <Meta
          title="KEMCHO - A Programming Language For Gujjus"
          description="Coding with
          a touch of fun,
          A fun programming language written in typescript"
          // url={router}
          url=""
          type="webiste"
          image="/images/logo/rangoli.png"
          keywords="gujarati"
        />
      </head>
      <body className={GeistSans.className}>
        {/* <div className="content"> */}
        <Navbar />
        {/* <MobileNav/> */}
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
