import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import Vimeo from "./Vimeo";
import Youtube from "./Youtube";

const ThumbWrapper = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 3.5rem;

  @media(max-width: 900px){
    width: 100%;
    text-align: center;
  }
  &::after {
    content: "▶";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 5rem;
    transform: translate(-50%, -50%);
    border: 0.5rem solid;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
  }
  &:hover {
    &::after {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
      text-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
      transform: translate(-50%, -55%) scale(1.03);
    }
  }
`;

const PlaceHolderImagem = styled.img`
  margin-bottom: -0.8rem;
`;

const Video = ({ placeholderImgName, vimeoId, title, youtubeId }) => {
  const [placeHolderAtivo, setPlaceHolderAtivo] = useState(true);

  if (placeHolderAtivo) {
    return (
      <ThumbWrapper onClick={() => setPlaceHolderAtivo(false)}>
        <picture>
          {/* <source
            type="image/webp"
            srcSet={`/static/img/thumbs-videos/${placeholderImgName}.webp`}
          /> */}
          <PlaceHolderImagem
            src={`/static/img/thumbs-videos/${placeholderImgName}.png`}
            alt={title}
          />
        </picture>
      </ThumbWrapper>
    );
  }

  return youtubeId !== "" ? (
    <Youtube youtubeId={youtubeId} />
  ) : (
    <Vimeo vimeoId={vimeoId} />
  );
};

Video.propTypes = {
  placeholderImgName: PropTypes.string,
  vimeoId: PropTypes.string,
  title: PropTypes.string,
  youtubeId: PropTypes.string
};

Video.defaultProps = {
  title: "",
  youtubeId: ""
};

export default Video;
