import React from 'react';
import PropTypes from 'prop-types';
import { AvatarWrapper } from './Avatar.styles';

const Avatar = ({ innerText, imageSrc, ...rest }) => {
  const defaultAvatar = "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesarSidePart&accessoriesType=Round&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=Red&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light";
  
  const image = imageSrc || defaultAvatar;
  return (
    innerText ? (
      <AvatarWrapper {...rest} innerText={innerText}>
        {innerText}
      </AvatarWrapper>
    ) : (
      <AvatarWrapper {...rest}>
        <img src={image} alt="Avatar" />
      </AvatarWrapper>
    )
  );
};

Avatar.propTypes = {
  width: PropTypes.number,
  innerText: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  inlineBlock: PropTypes.bool,
  margin: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Avatar;
