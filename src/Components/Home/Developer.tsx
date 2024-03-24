import Link from "next/link";
import Image from "next/image";
const Developer = () => {
  return (
    <section>
      <div className="developer_container" id="developer_section">
        <div className="content">
          <div className="title text-center">
            <h1 className="text-3xl font-bold"># Developer Info</h1>
          </div>
          <div className="body my-14">
            <div className="left_side py-4 px-5 ">
              <ul>
                <li className="mb-4">
                  <Link href="https://github.com/darshan-balar2400" target="_blank">
                    <Image
                      src="/images/developer/github.png"
                      width={40}
                      height={50}
                      alt="Github Profile"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://www.linkedin.com/in/darshan-balar-4302141bb/" target="_blank">
                    <Image
                      src="/images/developer/linkedin.png"
                      width={40}
                      height={50}
                      alt="Linkedin Profile"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://twitter.com/DarshanBalar40" target="_blank">
                    <Image
                      src="/images/developer/twitter.png"
                      width={40}
                      height={50}
                      alt="Twitter Profile"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://www.instagram.com/darshanbalar40/" target="_blank">
                    <Image
                      src="/images/developer/instagram.png"
                      width={40}
                      height={50}
                      alt="Instagram Profile"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://auth.geeksforgeeks.org/user/balardarshan_db" target="_blank" >
                    <Image
                      src="/images/developer/gfg_logo.png"
                      width={40}
                      height={50}
                      alt="GFG Profile"
                      // style={{"border":"1px solid lightgray"}}
                    />
                  </Link>

                  
                </li>
                <li className="mb-4">
                  <Link href="https://www.npmjs.com/~darshanbalar40" target="_blank" >
                    <Image
                      src="/images/developer/npm.png"
                      width={40}
                      height={50}
                      alt="NPM Profile"
                      // style={{"border":"1px solid lightgray"}}
                    />
                  </Link>

                  
                </li>
                <li className="mb-4">
                  <Link href="mailto:balardarshan2400@gmail.com">
                    <Image
                      src="/images/developer/mail.png"
                      width={40}
                      height={50}
                      alt="Mail"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="right_side p-5">
              <div className="top">

                <h1 className="my-2 text-2xl">Darshan Balar</h1>
                <h2 className="my-1 mb-6 text-gray-500">balardarshan2400@gmail.com</h2>

                <p>I'm a software engineer, dreamer, and an adventure seeker from india.
                currently pursuing my Master of Computer Applications (MCA) from Vellore Institute of Technology, Vellore.

                </p>

                <br/>

                Passionate Full Stack Web Developer with expertise in MERN stack (MongoDB, Express.js, React.js, Node.js) and additional proficiency in Next.js, TypeScript, SCSS and Handlebars. Equipped with a solid foundation in problem-solving and data structures & algorithms, I excel in tackling complex challenges and delivering efficient solutions. With a keen eye for detail and a dedication to staying updated with the latest technologies, I am committed to crafting high-quality, user-centric web applications. Let's connect and discuss how I can contribute to your next project or team! 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
