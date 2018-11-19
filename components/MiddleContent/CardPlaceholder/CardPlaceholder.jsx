import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash/fp';
import ContentLoader from "react-content-loader";
import { PreloaderCardContainer } from './CardPlaceholder.styles';

const Placeholder = ({ key, ...rest }) => (
  <PreloaderCardContainer key={key}>
    <ContentLoader 
      height={160}
      width={820}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ width: '100%' }}
      {...rest}
    >
      <rect x="0" y="15" rx="4" ry="4" width="117" height="6.4" /> 
      <rect x="-2.59" y="35" rx="3" ry="3" width="611.62" height="11.02" /> 
      <rect x="-1" y="83.18" rx="3" ry="3" width="626.5" height="7.3" /> 
      <rect x="0" y="108.61" rx="3" ry="3" width="581.4" height="6.91" /> 
      <rect x="-1" y="123" rx="3" ry="3" width="201" height="6.4" /> 
      <rect x="662.92" y="32.61" rx="0" ry="0" width="125" height="92" /> 
      <rect x="2" y="151" rx="3" ry="3" width="112.56" height="4.86" /> 
      <rect x="127" y="149.64" rx="3" ry="3" width="112.56" height="4.86" /> 
      <rect x="252" y="148.28" rx="3" ry="3" width="112.56" height="4.86" /> 
      <rect x="-0.59" y="52.61" rx="3" ry="3" width="389.62" height="10.52" /> 
      <rect x="-8" y="96.18" rx="3" ry="3" width="626.5" height="7.3" />
    </ContentLoader>
  </PreloaderCardContainer>
);

const CardPlaceholder = ({ count }) => {
  const preloaderRange = range(0, 5 + 1);

  return (
    preloaderRange.map((p, i) => Placeholder({ key: i }))
  );
};

CardPlaceholder.propTypes = {
  count: PropTypes.number,
};

CardPlaceholder.defaultProps = {
  count: 5,
};

export default CardPlaceholder;
