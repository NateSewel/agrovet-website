import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "160b4e0d-19c3-4438-b343-a29abe92d580");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="email" />
        </h3>
        <p>
          You can reach out to us via our contact form or find our contact
          information below. Your questions, suggestions and feedback are
          important to us as we thrive to provide you the best service for your
          business.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="mail-icon" /> Contact@Agrovet.org
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="phone-icon" /> +234 234-234-2345
          </li>
          <li>
            <img src={location_icon} alt="location-icon" /> 22 NASCO Junction,
            After Old Airport Round About Jos, Nigeria.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write Your Messages here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit now
            <img src={white_arrow} alt="arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
