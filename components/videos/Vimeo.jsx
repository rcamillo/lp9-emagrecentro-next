import styled from "styled-components";
import PropTypes from "prop-types";
import ReactVimeo from "@u-wave/react-vimeo";

const VideoWrapper = styled.div`
  width: 60rem;
  @media (max-width: 1070px) {
    width: 45rem;
  }
  @media (max-width: 900px) {
    width: 90vw;
  }
`;

const VideoWrapperSucesso = styled.div`
  width: 60rem;
  @media (max-width: 1070px) {
    width: 45rem;
  }
  @media (max-width: 900px) {
    width: 90vw;
  }
`;

const Vimeo = ({ vimeoId, titulo, autoplay }) => (
  <div>
    {autoplay ? (
      <VideoWrapperSucesso>
        <ReactVimeo
          video={vimeoId}
          className="vimeo-player"
          title={titulo}
          allowFullScreen
          responsive
          autoplay={!!autoplay}
        />
      </VideoWrapperSucesso>
    ) : (
      <VideoWrapper>
        <ReactVimeo
          video={vimeoId}
          className="vimeo-player"
          title={titulo}
          allowFullScreen
          responsive
        />
      </VideoWrapper>
    )}
  </div>
);

Vimeo.propTypes = {
  titulo: PropTypes.string,
  vimeoId: PropTypes.string.isRequired,
  autoplay: PropTypes.bool
};

Vimeo.defaultProps = {
  titulo: "",
  autoplay: false
};

export default Vimeo;
