import PropTypes from "prop-types";
import "./VideoPlayer.css";
import video from "../../assets/video_intro.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

VideoPlayer.propTypes = {
  playState: PropTypes.string.isRequired,
  setPlayState: PropTypes.string.isRequired,
};

export default VideoPlayer;
