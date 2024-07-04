import { Outlet } from "react-router-dom";
import NavBar from "../Home/Shared/NavBar";
// import Banner from "../Home/Shared/Banner";
import AboutMe from "../Home/Shared/AboutMe";
import ExperienceEducation from "../Home/Shared/ExperienceEducation";
import Contact from "../Home/Shared/Contact";
import Projects from "../Home/Shared/Projects";
import Skills from "../Home/Shared/Skills";
import Footer from "../Home/Shared/Footer";
import Resume from "../Home/Shared/Resume";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <AboutMe></AboutMe>
            <Resume></Resume>
            <ExperienceEducation></ExperienceEducation>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Root;