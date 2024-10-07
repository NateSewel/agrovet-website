import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Transforming Livestock Farming into Profitable Enterprises</h1>
        <p>
          Your Strategic Partner in Building Sustainable Agribusiness Success
          Across Nigeria. <br />
          Expert Guidance from Farm Setup to Scale-up | Comprehensive Veterinary
          Support | Professional Business Development.
        </p>
        <button className="btn">
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Schedule a free Consultation
            <img src={dark_arrow} alt="arrow_icon" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
