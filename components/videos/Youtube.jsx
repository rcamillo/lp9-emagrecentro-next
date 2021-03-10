import styled from "styled-components";
import PropTypes from "prop-types";
import YouTube from "@u-wave/react-youtube";

const VideoWrapper = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
  .vimeo-player {
    width: 500px;
    height: 300px;

    @media (max-width: 1110px) {
      width: 420px;
      height: 236.25px;
    }
    @media (max-width: 990px) {
      width: 90vw;
      height: 50.625vw;
    }
  }
`;

const Youtube = ({ youtubeId }) => {
  return (
    <VideoWrapper>
      <YouTube
        video={youtubeId}
        className="vimeo-player"
        allowFullScreen
        responsive
        autoplay
      />
    </VideoWrapper>
  );
};

Youtube.propTypes = {
  youtubeId: PropTypes.string.isRequired
};

export default Youtube;
