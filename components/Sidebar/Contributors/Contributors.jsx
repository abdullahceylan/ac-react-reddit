import React from 'react';
import Avatar from '../../Avatar';
import {
  ContributorWrapper,
  ContributorList,
  Contributor,
} from './Contributors.styles';

const Contributors = ({ count }) => {
  return (
    <ContributorWrapper>
      <ContributorList>
        <Contributor><Avatar /></Contributor>
        <Contributor><Avatar /></Contributor>
        <Contributor><Avatar /></Contributor>
        <Contributor><Avatar /></Contributor>
        <Contributor><Avatar innerText="+6" backgroundColor="#ff2d55" /></Contributor>
      </ContributorList>
    </ContributorWrapper>
  )
}

export default Contributors
