import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="nav_container bg-white px-24 py-3 border-b-2 border-b-gray-200">
            <div className="content grid grid-cols-2 items-center">
                <div className="left_nav flex items-center">
                    <div className="logo flex items-center">
                        
                        <div className="image">
                            <Image src="/images/logo/rangoli.png" width={80} height={80} alt="logo"/>
                        </div>

                        <div className="logo_title mx-8 flex place-items-center text-2xl mb-2">
                            <h1>KEMCHO</h1>
                        </div>
                        
                    </div>

                    <div className="links mx-0">
                        <ul className="flex items-center gap-3">
                            <li className="text-gray-500 hover:text-gray-900 delay-200"><Link href="#">Playground</Link></li>
                            <li className="text-gray-500 hover:text-gray-900 delay-200"><Link href="#">Documentation</Link></li>
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar;