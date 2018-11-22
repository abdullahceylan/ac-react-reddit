import React from 'react';
import PropTypes from 'prop-types';
import { take, map } from 'lodash/fp';
import ActivityItem from './ActivityItem';
import {
  ActivityWrapper,
  ActivityList,
  BlurEffect,
  ViewAll,
} from './Activities.styles';

const activitiesArr = [
  {
    id: 1,
    content: 'The group assignment starterpack',
    details: {
      points: 8287,
      comments: 135,
    },
  },
  {
    id: 2,
    content: 'Supposedly extinct kangaroo rat resurfaces after 30 years',
    details: {
      points: 12,
      comments: 3,
    },
  },
  {
    id: 3,
    content: 'The group assignment starterpack',
    details: {
      points: '16.4k',
      comments: 135,
    },
  },
];

const Activities = ({ count }) => {
  const activityList = take(count, activitiesArr);
  return (
    <ActivityWrapper>
      <ActivityList>
        {
          map(item => <ActivityItem key={item.id} activity={item} />, activityList)
        }
        <BlurEffect />
      </ActivityList>
      <ViewAll>+ View All</ViewAll>
    </ActivityWrapper>
  )
}

Activities.propTypes = {
  count: PropTypes.number,
};

Activities.defaultProps = {
  count: 3,
};

export default Activities;
