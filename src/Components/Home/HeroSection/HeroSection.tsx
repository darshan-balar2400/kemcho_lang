import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="content">
        <div className="title">
          <h1>A Programming Language For Gujjus</h1>
        </div>
        <div className="subtitle">
          <h2 className="">
          Coding with
            a touch of fun<br/>
            A fun programming language written in typescript
          </h2>

          <h2 className="npm">
            <Link href="https://www.npmjs.com/package/kemcholang"><code>npm i kemcholang </code></Link>
          </h2>

          <h2 className="developer_name">Made by <span><Link href="https://www.linkedin.com/in/darshan-balar-4302141bb/">@darshanbalar</Link></span></h2>
        </div>

        <div className="buttons">
          <Link href="#playground_section">
            <button>Get Started</button>
          </Link>
          <Link href="#documentation_section">
            <button className="documentbutton">Documentation</button>
          </Link>
        </div>
        <div className="mt-14 image">
          <Image
            src="/images/logo/rangoli.png"
            width={120}
            height={120}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
