import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import {
  Contributor,
  Content,
} from './Contributors.styles';

const ContributorItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <Contributor>
      <Content>
        { item.type === 'text' && item.text !== ''
            ? <Avatar innerText={item.text} backgroundColor={item.backgroundColor} />
            : <Avatar imageSrc={item.imageURL} />
        }
      </Content>
    </Contributor>
  );
};

ContributorItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default ContributorItem;
