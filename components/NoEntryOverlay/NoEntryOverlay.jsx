import React from 'react';
import { NoEntryWrapper, NoEntryText, Overlay } from './NoEntryOverlay.styles';

const NoEntryOverlay = () => (
  <NoEntryWrapper>
    <NoEntryText>
      Looks like nothing is here enough in this subreddit.
      <br />You can choose another one.
    </NoEntryText>
    <Overlay></Overlay>
  </NoEntryWrapper>
);

export default NoEntryOverlay;
