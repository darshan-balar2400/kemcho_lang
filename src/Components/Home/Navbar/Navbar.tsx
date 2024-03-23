import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
    return (
        <nav className="nav_container ">
            <div className="content">
                <div className="left_nav ">
                    <div className="logo">
                        <div className="image">
                            <Image src="/images/logo/rangoli.png" width={70} height={70} alt="logo"/>
                        </div>

                        <div className="logo_title">
                            <h1>KEMCHO</h1>
                        </div>
                        
                    </div>

                    <div className="links mx-0">
                        <ul className="">
                            <li className="text-gray-500 hover:text-gray-900 delay-200"><Link href="#playground_section">Playground</Link></li>
                            <li className="text-gray-500 hover:text-gray-900 delay-200"><Link href="#documentation_section">Documentation</Link></li>
                            <li className="text-gray-500 hover:text-gray-900 delay-200"><Link href="#developer_section">Contact Developer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="right_nav justify-self-end">
                    <div className="versions">
                        <div className="version">
                            <h5>1.0.1</h5>
                        </div>
                    </div>
                    <div className="sidemenu">
                        <CiMenuFries/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;