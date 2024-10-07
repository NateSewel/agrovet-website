import PropTypes from "prop-types";
import "./About.css";
import about_img from "../../assets/about1.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="about-img" className="about-img" />
        <img
          src={play_icon}
          alt="about-img"
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>Partner with Agrovet Embassy</h3>
        <h2>
          We are here to help you succeed in livestock agribusiness. Let us
          build a sustainable and profitable business together.
        </h2>
        <p>
          We offer feasibility studies and setup services for new livestock
          businesses.
        </p>
        <p>
          Professional veterinary services to ensure your livestock remain
          healthy and productive.
        </p>
        <p>
          Comprehensive training and mentorship programs for aspiring and
          existing agribusiness entrepreneurs.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  setPlayState: PropTypes.string.isRequired,
};

export default About;
