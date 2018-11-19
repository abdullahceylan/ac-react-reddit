import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  MdFavoriteBorder,
  MdMoreVert,
  MdChatBubbleOutline,
  MdShare, MdLabelOutline,
} from 'react-icons/md';
import PostInformation from './PostInformation';
import ExpandedCardContent from './CardExpandedContent';
import Comments from './Comments';
import { contentActions } from '../../../actions';
import { ActionsBar, ActionItem } from '../../styles';
import {
  CardContainer,
  ContentArea,
  DetailsRow,
  ContentRow,
  ContentTitle,
  ContentDetails,
  ContentURL,
  ExpandableContent,
} from './Card.styles';

import mockItem from './mock_item';

class DetailsCard extends PureComponent {
  componentDidMount() {
    const { currentModalItem } = this.props;
    if (currentModalItem) {
      this.props.fnFetchPostComments(currentModalItem);
    }
  }

  render() {
    const { currentModalItem } = this.props;
    if (!currentModalItem) {
      return null;
    }
    const singleItem = currentModalItem;

    return (
      <CardContainer direction="column">
        <ContentArea borderNone width="100%">
          <DetailsRow direction="row">
            <PostInformation post={singleItem} />
            <ActionsBar noMargin>
              <ActionItem><MdFavoriteBorder size={20} color="#747474" /></ActionItem>
              <ActionItem><MdMoreVert size={20} color="#747474" /></ActionItem>
            </ActionsBar>
          </DetailsRow>
          <ContentRow>
            <ContentDetails>
              <ContentTitle href="#">{singleItem.title}</ContentTitle>
              <ContentURL href={`https://www.reddit.com${singleItem.permalink}`} target="_blank">{singleItem.permalink}</ContentURL>
              <ExpandableContent>
                <ExpandedCardContent item={singleItem} />
              </ExpandableContent>
            </ContentDetails>
          </ContentRow>
          <ActionsBar>
            <ActionItem><MdChatBubbleOutline /> {singleItem.num_comments} comments</ActionItem>
            <ActionItem><MdShare /> Share</ActionItem>
            <ActionItem><MdLabelOutline /> {singleItem.domain}</ActionItem>
          </ActionsBar>
        </ContentArea>
        { !this.props.comments.fetching && <Comments list={this.props.comments} />}
      </CardContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  currentModalItem: state.posts.currentModalItem,
  comments: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  fnFetchPostComments: (item) => dispatch(contentActions.fetchPostComments(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsCard);
