import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function PageNav() {
  return (
    <nav>
      {/* <HashLink smooth to="/#home">
        Our Services
      </HashLink>

      <HashLink smooth to="/#WhyUs">ad
        Why Us
      </HashLink>

      <HashLink smooth to="/#testimonial">
        Testimonial
      </HashLink>

      <HashLink smooth to="/#testimonial">
        FAQ
      </HashLink> */}
      <Link to={"/LandingPage"}>Home</Link>
    </nav>
  );
}

export default PageNav;
