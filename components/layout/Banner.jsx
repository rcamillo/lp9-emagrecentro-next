import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerWrapper = styled.div`
  position: relative;
  height: 40rem;
  @media (max-width: 980px) {
    height: initial;
  }
`;

const BannerImagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 980px) {
    position: relative;
    height: initial;
  }
`;

const Banner = ({ bannerId }) => (
  <BannerWrapper>
    <picture>
      <source
        media="(max-width: 799px)"
        type="image/webp"
        srcSet={`/static/img/banners/${bannerId}-600.webp`}
      />
      <source
        media="(max-width: 799px)"
        srcSet={`/static/img/banners/${bannerId}-600.png`}
      />
      <source
        type="image/webp"
        srcSet={`/static/img/banners/${bannerId}.webp`}
      />
      <BannerImagem src={`/static/img/banners/${bannerId}.jpg`} alt="" />
    </picture>
  </BannerWrapper>
);

Banner.propTypes = {
  bannerId: PropTypes.string.isRequired,
};

export default Banner;
