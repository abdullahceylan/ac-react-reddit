import React from 'react';
import PropTypes from 'prop-types';
import {
  Activity,
  Content,
  Details,
  Points,
  Comments,
} from './Activities.styles';

const ActivityItem = ({ activity }) => {
  if (!activity) {
    return null;
  }
  return (
    <Activity>
      <Content>{activity.content}</Content>
      <Details>
        <Points>{activity.details.points} points</Points>
        <Comments>{activity.details.comments} comments</Comments>
      </Details>
    </Activity>
  );
};

ActivityItem.propTypes = {
  activiy: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    details: PropTypes.shape({
      points: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      comments: PropTypes.number,
    }),
  }).isRequired,
};

export default ActivityItem;
