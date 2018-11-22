import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';
import Avatar from '../../Avatar';
import { getSubredditInfo, timeFromNow } from '../../../helpers';
import { contentActions } from '../../../actions';
import { Information, PostSubreddit } from './Card.styles';

const PostInformation = ({
  post, subreddits, fetchSubReddit,
  showAvatar, showSubreddit,
}) => {
  if (!post) {
    return null;
  }

  const subredditIcon = getSubredditInfo(subreddits,  post.subreddit_id, 'icon_img');
  const avatarImage = subredditIcon ? subredditIcon : '';

  const onClick = () => {
    const href = `/${post.subreddit_name_prefixed}`;

    fetchSubReddit({ 
      sub: post.subreddit
    });

    Router.push(`/?subredditName=${post.subreddit}`, href, { shallow: true });
  }

  return (
    <Information>
      { showAvatar && <Avatar width={24} inlineBlock imageSrc={avatarImage} /> }
      { showSubreddit && (
        <PostSubreddit onClick={onClick}>
          {post.subreddit_name_prefixed} ・ 
        </PostSubreddit>)
      }Posted by {post.author} ・ {timeFromNow(post.created)} ago
    </Information>
  )
}

PostInformation.propTypes = {
  post: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  subreddits: PropTypes.shape({
    model: PropTypes.oneOfType([
      PropTypes.object,
    ]),
    fetching: PropTypes.bool,
  }),
  fetchSubReddit: PropTypes.func,
  showAvatar: PropTypes.bool,
  showSubreddit: PropTypes.bool,
};

PostInformation.defaultProps = {
  subreddits: {
    model: {},
    fetching: false,
  },
  fetchSubReddit: () => {},
  showAvatar: true,
  showSubreddit: true,
}

const mapStateToProps = state => ({
  subreddits: state.subreddits,
});

const mapDispatchToProps = dispatch => ({
  fetchSubReddit: (params) => dispatch(contentActions.fetchSubReddit(params)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostInformation);
