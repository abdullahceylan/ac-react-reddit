import styled, { css } from 'styled-components';
import { ifProp, prop, ifNotProp } from 'styled-tools';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: ${prop('direction', 'row')};
  max-width: 100%;
  min-height: 145px;
  border-bottom: 1px solid #eee;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: ${prop('width', '90%')};
  border-right: ${ifNotProp('borderNone', '1px solid #eee', '0')};
`;

export const DetailsRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  ${ifProp({direction: 'row'}, css`
    flex-direction: row;
    justify-content: space-between;
  `)}
`;

export const Information = styled.div`
  font-size: 11px;
`;

export const PostSubreddit = styled.span`
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`;

export const Actions = styled.div`

`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleFlairText = styled.span`
  font-size: 12px;
  margin-right: 8px;
  background-color: #eee;
  padding: 6px 10px;
  border-radius: 5px;
`;

export const ContentTitle = styled.a`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`;

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentURL = styled.a`
  font-size: 11px;
`;

export const ContentText = styled.span`
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
  & a {
    color: ${props => props.theme.colors.orange};
    text-decoration: none;
  }
`;

export const ContentImage = styled.img`
  width: 120px;
  height: 72px;
`;

export const ContentNoImage = styled.span`
  width: 120px;
  min-width: 120px;
  height: 35px;
  min-height: 35px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
`;

export const ExpandableContent = styled.div`
  display: flex;
  min-height: 143px;
  width: 100%;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
  margin-top: 5px;
  word-break: break-word;

  & a {
    color: ${props => props.theme.colors.orange};
    text-decoration: none;
  }

  & img {
    max-width: 100%;
  }

  & video {
    max-width: 100%;
  }
`;

export const VotingArea = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  background-color: #f3f6f8;
`;

export const CurrentPoint = styled.span`
  margin: 10px 0;
`;

export const DetailContent = styled.div`
  padding: 5px;
`;

export const DetailImage = styled.img`
  max-width: 100%;
`;

export const CommentsArea = styled.div`
  padding-left: 20px;
`;

export const Comment = styled.div`
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  line-height: 20px;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const CommentBody = styled.div`
  font-size: 13px;
`;
