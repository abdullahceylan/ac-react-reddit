import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';
import { contentActions } from '../../../actions';
import {
  MdKeyboardBackspace,
  MdViewAgenda,
  MdDashboard,
  MdAddCircleOutline,
} from 'react-icons/md';
import { Button, Filters, FilterItem, SelectBoxWrapper, SelectBox } from '../../styles';
import {
  TopBarWrapper,
  LeftSide,
  RightSide,
  SubRedditTitle,
} from './TopBar.styles';

const prepareTitle = (title) => title.replace(/^./, str => str.toUpperCase());

const TopBar = ({ sort, pageParams, fetchReddit }) => {
  const title = sort ? prepareTitle(sort) : prepareTitle(pageParams.sort);
  const subTitle = pageParams.subredditName ? pageParams.subredditName : '';

  const goHome = () => {

    fetchReddit();

    Router.push(`/`, '/', { shallow: true });

  }
  return (
    <TopBarWrapper>
      <LeftSide>
        <span onClick={goHome}>
          <MdKeyboardBackspace />
        </span>
        {title}
        {subTitle && <SubRedditTitle>{subTitle}</SubRedditTitle>}
      </LeftSide>
      <RightSide>
        <SelectBoxWrapper>
          {title} in
          <SelectBox>
            <option value="US">US</option>
          </SelectBox>
          <SelectBox>
            <option value="All">All States</option>
          </SelectBox>
        </SelectBoxWrapper>
        <Filters>
          <FilterItem><MdViewAgenda size={23} /></FilterItem>
          <FilterItem color="#bfbfbf"><MdDashboard size={23} /></FilterItem>
        </Filters>
        <Button><MdAddCircleOutline /> Submit</Button>
      </RightSide>
    </TopBarWrapper>
  )
}

TopBar.propTypes = {
  sort: PropTypes.string,
  pageParams: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

TopBar.defaultProps = {
  sort: 'hot',
  pageParams: {},
};

const mapDispatchToProps = dispatch => ({
  fetchReddit: (params) => dispatch(contentActions.fetchReddit(params)),
})

export default connect(
  null,
  mapDispatchToProps,
)(TopBar);
