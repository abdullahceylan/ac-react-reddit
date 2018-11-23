import { contentConstants } from '../constants';

const API_BASE = 'https://www.reddit.com';

export const fetchReddit = (params = {}) => {
  const request = data => ({ type: contentConstants.GET_REDDIT_POSTS_REQUEST, data });
  const success = data => ({ type: contentConstants.GET_REDDIT_POSTS_SUCCESS, data });
  const failure = error => ({ type: contentConstants.GET_REDDIT_POSTS_FAILURE, error });

  const { sort = 'hot' } = params;

  return (dispatch) => {
    console.log('fetchReddit.type', sort);
    dispatch(request({ sort }));

    fetch(`${API_BASE}/${sort}.json`)
      .then(response => response.json())
      .then(
        (json) => {
          console.log('fetchReddit.data', json);
          dispatch(success(json.data));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

export const fetchSubReddit = (params = {}) => {
  const request = data => ({ type: contentConstants.GET_SUBREDDIT_POSTS_REQUEST, data });
  const success = data => ({ type: contentConstants.GET_SUBREDDIT_POSTS_SUCCESS, data });
  const failure = error => ({ type: contentConstants.GET_SUBREDDIT_POSTS_FAILURE, error });

  const { sub, sort = 'hot' } = params;

  return (dispatch) => {
    console.log('fetchSubReddit.type', sort);
    dispatch(request({ sort }));

    fetch(`${API_BASE}/r/${sub}/${sort}.json`)
      .then(response => response.json())
      .then(
        (json) => {
          console.log('fetchSubReddit.data', json);
          dispatch(success(json.data));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

export const fetchSubRedditList = () => {
  const request = () => ({ type: contentConstants.GET_SUBREDDIT_LIST_REQUEST });
  const success = data => ({ type: contentConstants.GET_SUBREDDIT_LIST_SUCCESS, data });
  const failure = error => ({ type: contentConstants.GET_SUBREDDIT_LIST_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    fetch(`${API_BASE}/subreddits.json`)
      .then(response => response.json())
      .then(
        (json) => {
          console.log('fetchSubRedditList.data', json);
          dispatch(success(json.data));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}

export const changeRedditSorting = (params = {}) => {
  const request = newSort => ({ type: contentConstants.CHANGE_SORT_REQUEST, newSort });

  const { sort = 'hot' } = params;

  return (dispatch) => {
    console.log('changeRedditSorting.type', sort);
    dispatch(request(sort));
  };
}

export const expandItem = (item) => {
  const request = itemName => ({ type: contentConstants.EXPAND_ITEM_REQUEST, itemName });

  return (dispatch) => {
    console.log('expandItem.item', item);
    dispatch(request(item.name));
  };
}

export const setModalContentItem = (item) => {
  const request = item => ({ type: contentConstants.SET_MODAL_ITEM_REQUEST, item });

  return (dispatch) => {
    console.log('setModalContentItem.item', item);
    dispatch(request(item));
  };
}

export const loadMoreRedditItems = (params = {}) => {
  const request = data => ({ type: contentConstants.LOAD_MORE_REQUEST, data });
  const success = data => ({ type: contentConstants.LOAD_MORE_SUCCESS, data });
  const failure = error => ({ type: contentConstants.LOAD_MORE_FAILURE, error });

  const { sort = 'hot', after } = params;

  return (dispatch) => {
    console.log('loadMoreRedditItems.sort, after', sort, after);
    dispatch(request({ sort }));

    fetch(`${API_BASE}/${sort}.json?after=${after}`)
      .then(response => response.json())
      .then(
        (json) => {
          console.log('loadMoreRedditItems.data', json);
          dispatch(success(json.data));
        },
        (error) => {
          dispatch(failure(error));
          // dispatch(alertActions.fail({ ...error, method: 'fetchReddit' }));
        },
      );
  }
}

export const loadMoreSubRedditItems = (params = {}) => {
  const request = data => ({ type: contentConstants.LOAD_MORE_REQUEST, data });
  const success = data => ({ type: contentConstants.LOAD_MORE_SUCCESS, data });
  const failure = error => ({ type: contentConstants.LOAD_MORE_FAILURE, error });

  const { sub, sort = 'hot', after } = params;

  return (dispatch) => {
    console.log('loadMoreSubRedditItems.sort, after', sort, after);
    dispatch(request({ sort }));

    fetch(`${API_BASE}/r/${sub}/${sort}.json?after=${after}`)
      .then(response => response.json())
      .then(
        (json) => {
          console.log('loadMoreSubRedditItems.data', json);
          dispatch(success(json.data));
        },
        (error) => {
          dispatch(failure(error));
          // dispatch(alertActions.fail({ ...error, method: 'fetchReddit' }));
        },
      );
  }
}

export const fetchPostComments = (item) => {
  const request = data => ({ type: contentConstants.GET_POST_COMMENTS_REQUEST, data });
  const success = (data, item) => ({ type: contentConstants.GET_POST_COMMENTS_SUCCESS, data, item });
  const failure = error => ({ type: contentConstants.GET_POST_COMMENTS_FAILURE, error });

  return (dispatch) => {
    console.log('fetchPostComments.item', item);
    dispatch(request({ item }));

    // remove the last slash from the permalink
    const commentEndpoint = item.permalink.replace(/\/$/, '');

    fetch(`${API_BASE}/${commentEndpoint}.json`)
      .then(response => response.json())
      .then(
        (json) => {
          console.log('fetchPostComments.data', json);
          dispatch(success(json[1].data, item));
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };
}
