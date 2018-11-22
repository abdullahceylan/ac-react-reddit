import React from 'react';
import { take, map } from 'lodash/fp';
import ContributorItem from './ConributorItem';
import {
  ContributorWrapper,
  ContributorList,
} from './Contributors.styles';

const contributorArr = [
  {
    id: 1,
    type: 'image',
    imageURL: '',
    name: 'Contributor 1',
  },
  {
    id: 2,
    type: 'image',
    imageURL: '',
    name: 'Contributor 2',
  },
  {
    id: 3,
    type: 'image',
    imageURL: '',
    name: 'Contributor 3',
  },
  {
    id: 4,
    type: 'image',
    imageURL: '',
    name: 'Contributor 4',
  },
  {
    id: 5,
    type: 'text',
    text: '+6',
    backgroundColor: '#ff2d55',
  },
]

const Contributors = ({ count }) => {
  const contributorList = take(count, contributorArr);
  return (
    <ContributorWrapper>
      <ContributorList>
        {
          map(item => <ContributorItem key={item.id} item={item} />, contributorList)
        }
      </ContributorList>
    </ContributorWrapper>
  )
}

export default Contributors;
