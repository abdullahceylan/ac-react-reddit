import React from 'react';
import PropTypes from 'prop-types';
import { last } from 'lodash/fp';
import YTPlayer from 'react-youtube';
import Markdown from 'react-markdown';
import { regexFilters } from '../../../../helpers';
import {
  DetailContent,
  DetailImage,
} from '../Card.styles';

const expandedContent = ({ item, expanded }) => {
  // if (expanded) {
    if (item.selftext) {
      return (
        <DetailContent>
          <Markdown
            source={item.selftext}
            linkTarget="_blank"
          />
        </DetailContent>
      );
    }
    else if ((regexFilters.image).test(item.url)) {
        return (
          <DetailContent>
            <DetailImage alt={item.title} src={item.url} />
          </DetailContent>
        );
    }
    else if (regexFilters.youtube.test(item.url)) {
      let videoId;
      if (regexFilters.youtubeShort.test(item.url)) { //https://youtu.be/{id}
        videoId = regexFilters.youtubeShort.exec(item.url)[2];
      }
      else { //https://www.youtube.com/watch?v={id}
        const urlParts = item.url.split('watch?v=');
        videoId = urlParts[urlParts.length - 1];
      }
      if (videoId) {
        return (
          <DetailContent>
            <YTPlayer videoId={videoId}></YTPlayer>
          </DetailContent>
        );
      }
    } else {
      if (item.is_reddit_media_domain) {
        const { images } = item.preview;
        const prevImage = images.length > 0 && last(images[0].resolutions);
        const videoFile = item.secure_media.reddit_video.hls_url;
        return (
          <DetailContent>
            <video
              poster={prevImage ? prevImage.url.replace(/&amp;/g, '&') : ''}
              muted=""
            >
              <source
                src={videoFile}
                type="application/vnd.apple.mpegURL"
              />
            </video>
          </DetailContent>
        )
      }
    }
  // }
  return null;
}

expandedContent.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  expanded: PropTypes.bool,
};

expandedContent.defaultProps = {
  expanded: false,
};

export default expandedContent;
