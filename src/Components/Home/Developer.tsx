import Link from "next/link";
import Image from "next/image";
const Developer = () => {
  return (
    <section>
      <div className="developer_container flex justify-center items-center my-4 p-4" id="developer_section">
        <div className="content">
          <div className="title text-center">
            <h1 className="text-3xl font-bold">Developer Info</h1>
          </div>
          <div className="body my-14">
            <div className="left_side py-4 px-5 ">
              <ul>
                <li className="mb-4">
                  <Link href="#">
                    <Image
                      src="/images/developer/github.png"
                      width={40}
                      height={50}
                      alt="Github"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <Image
                      src="/images/developer/linkedin.png"
                      width={40}
                      height={50}
                      alt="Github"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <Image
                      src="/images/developer/twitter.png"
                      width={40}
                      height={50}
                      alt="Github"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <Image
                      src="/images/developer/instagram.png"
                      width={40}
                      height={50}
                      alt="Github"
                    />
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    <Image
                      src="/images/developer/gmail_go.png"
                      width={40}
                      height={50}
                      alt="Github"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="developer_image">
              <img
                src="/images/developer/developer.jpg"
                alt="developer"
              />
            </div>

            <div className="right_side p-5">
              <div className="top flex gap-3 items-center">
              Description: Designed and implemented a custom programming language using TypeScript, incorporating lexical analysis, abstract syntax tree (AST) generation, parsing, and interpretation functionalities. The language features include variable declaration, print statement, arithmetic calculations, as well as control flow constructs such as if, else-if, and else statements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
