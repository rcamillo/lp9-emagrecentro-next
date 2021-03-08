import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Footer from './Footer';
import FooterGeral from './FooterGeral';

const LayoutStyled = styled.div`
  @media (max-width: 980px) {
  }
`;

const Content = styled.main``;

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutStyled className="layout">
      <Content>{children}</Content>
      {router.pathname !== '/' ? <FooterGeral /> : ""}
    </LayoutStyled>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;