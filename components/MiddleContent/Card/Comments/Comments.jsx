import React from 'react';
import { map } from 'lodash/fp';
import Markdown from 'react-markdown';
import PostInformation from '../PostInformation';
import { 
  CommentsArea,
  Comment,
  CommentBody,
} from '../Card.styles';

const PostComments = ({ list }) => {
  if (!list) {
    return null;
  }

  return (
    <CommentsArea>
      {map(comment => (
        <Comment>
          <PostInformation post={comment} showAvatar={false} showSubreddit={false} />
          <CommentBody>
            <Markdown
              source={comment.body}
              linkTarget="_blank"
            />
          </CommentBody>
        </Comment>
    ), list) }
    </CommentsArea>
  )
};

export default PostComments;
