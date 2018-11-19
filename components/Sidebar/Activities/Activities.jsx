import React from 'react';
import Avatar from '../../Avatar';
import {
  ActivityWrapper,
  ActivityList,
  Activity,
  Content,
  Details,
  Points,
  Comments,
  BlurEffect,
  ViewAll,
} from './Activities.styles';

const Activities = ({ count }) => {
  return (
    <ActivityWrapper>
      <ActivityList>
        <Activity>
          <Content>The group assignment starterpack</Content>
          <Details>
            <Points>8287 points</Points>
            <Comments>135 comments</Comments>
          </Details>
        </Activity>
        <Activity>
          <Content>Supposedly extinct kangaroo rat resurfaces after 30 years</Content>
          <Details>
            <Points>12 points</Points>
            <Comments>3 comments</Comments>
          </Details>
        </Activity>
        <Activity>
          <Content>The group assignment starterpack</Content>
          <Details>
            <Points>16.4K points</Points>
            <Comments>235 comments</Comments>
          </Details>
        </Activity>
        <BlurEffect />
      </ActivityList>
      <ViewAll>+ View All</ViewAll>
    </ActivityWrapper>
  )
}

export default Activities
