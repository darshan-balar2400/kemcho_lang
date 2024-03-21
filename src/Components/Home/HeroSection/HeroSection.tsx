import Image from "next/image";

const Hero = () => {
    return (
        <section className="hero_section flex justify-center items-center">
            <div className="content flex justify-center items-center flex-col">
                <div className="title">
                    <h1 className="text-6xl text-[#171717] font-extrabold mb-8 text-center tracking-normal ">A Programming Language For Gujjus</h1>
                </div>
                <div className="subtitle text-center mb-12 w-3/5">
                    <h2 className="text-2xl leading-10 font-normal">A fun programming language written in typescript <br/>- Coding with a touch of fun</h2>
                </div>

                <div className="buttons flex gap-3">
                    <button>Get Started</button>
                    <button className="documentbutton">Documentation</button>
                </div>
                <div className="mt-14">
                <Image src="/images/logo/rangoli.png" width={120}  height={120} alt=""/></div>
            </div>
        </section>
    )
}   

export default Hero;