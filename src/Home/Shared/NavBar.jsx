import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const NavBar = () => {
    
    return (
        // <div className="navbar bg-sky-900 text-white">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost text-xl">Nusrat Jahan</a>
        //     </div>
        //     <div className="flex-none">
        //         <ul className="menu menu-horizontal px-1">
        //             <li><a>About Me</a></li>
        //             <li><a>Skills</a></li>
        //             <li><a>Contact Me</a></li>
        //         </ul>
        //     </div>
        // </div>

        <div className="navbar bg-sky-900/60 fixed text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-sky-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About Me</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Education</a></li>
                        
                        <li><ScrollLink
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='some-class'
                            activeClass='some-active-class'
                        >
                            Projects
                        </ScrollLink></li>
                        <li><a>Contact Me</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Nusrat Jahan</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About Me</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Education</a></li>
                    <li><a>Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;