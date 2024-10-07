import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  // TranslateX Variable
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user-image" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Abuja, NG</span>
                </div>
              </div>
              <p>
                Partnering with Agrovet Embassy was the best decision I ever
                made. My business has been thriving since I was introduced to
                Agrovet.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user-image" />
                <div>
                  <h3>Maureen Solomon</h3>
                  <span>Lagos, NG</span>
                </div>
              </div>
              <p>
                Partnering with Agrovet Embassy was the best decision I ever
                made. My business has been thriving since I was introduced to
                Agrovet.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user-image" />
                <div>
                  <h3>William Paul</h3>
                  <span>Jos, NG</span>
                </div>
              </div>
              <p>
                Partnering with Agrovet Embassy was the best decision I ever
                made. My business has been thriving since I was introduced to
                Agrovet.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user-image" />
                <div>
                  <h3>Nate Isewede</h3>
                  <span>Jos, NG</span>
                </div>
              </div>
              <p>
                Partnering with Agrovet Embassy was the best decision I ever
                made. My business has been thriving since I was introduced to
                Agrovet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
