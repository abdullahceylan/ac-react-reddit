import { contentConstants } from '../constants';
import { find, has, reject } from 'lodash/fp';
import { normalizePosts, allCollection } from '../helpers';

const contentInitialState = {
  items: [],
  model: {},
  after: '',
  fetching: false,
  error: false,
  sort: 'hot',
  currentModalItem: null,
};

const contentReducer = (state = contentInitialState, action) => {
  switch (action.type) {
    case contentConstants.GET_REDDIT_POSTS_REQUEST:
    case contentConstants.LOAD_MORE_REQUEST:
    case contentConstants.GET_SUBREDDIT_POSTS_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case contentConstants.GET_REDDIT_POSTS_SUCCESS:
    case contentConstants.GET_SUBREDDIT_POSTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        items: action.data.children,
        model: normalizePosts(action.data.children, 'name'),
        allPosts: allCollection(action.data.children, 'name'),
        after: action.data.after,
      }
      case contentConstants.GET_REDDIT_POSTS_FAILURE:
      case contentConstants.GET_SUBREDDIT_POSTS_FAILURE:
      case contentConstants.LOAD_MORE_FAILURE:
      return {
        ...state,
        error: true,
      }
    case contentConstants.CHANGE_SORT_REQUEST:
      return {
        ...state,
        sort: action.newSort,
      }
    case contentConstants.SET_MODAL_ITEM_REQUEST:
      return {
        ...state,
        currentModalItem: action.item,
      }
    case contentConstants.EXPAND_ITEM_REQUEST:
      let item = find(i => (i.data.name === action.itemName), state.items);
      let post = has(action.itemName, state.model) && state.model[action.itemName];
      const itemIndex = state.items.indexOf(item);

      let isExpanded = true;
      if (item.data.isExpanded) {
        isExpanded = false;
      }
      const data = {
        ...item.data,
        isExpanded,
      };

      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          { ...item, data },
          ...state.items.slice(itemIndex + 1),
        ],
        model: {
          ...state.model,
          [post.name]: {
            ...post,
            ...data,
          },
        }, 
      };
    case contentConstants.LOAD_MORE_SUCCESS:
      const finalItems = [
        ...state.items,
        ...action.data.children,
      ];
      return {
        ...state,
        items: finalItems,
        model: normalizePosts(finalItems),
        allPosts: allCollection(finalItems),
        after: action.data.after,
        fetching: false,
      };
    default:
      return state;
  }
}

const subRedditListInitialState = {
  model: {},
};

const subRedditsReducer = (state = subRedditListInitialState, action) => {
  switch (action.type) {
    case contentConstants.GET_SUBREDDIT_LIST_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case contentConstants.GET_SUBREDDIT_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        model: normalizePosts(action.data.children, 'name'),
        allNames: allCollection(action.data.children, 'name'),
      }
      case contentConstants.GET_SUBREDDIT_LIST_FAILURE:
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}

const postCommentsInitialState = {
  fetching: false,
};

const postCommentsReducer = (state = postCommentsInitialState, action) => {
  switch (action.type) {
    case contentConstants.GET_POST_COMMENTS_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case contentConstants.GET_POST_COMMENTS_SUCCESS:
      const postComments = reject(item => item.kind === 'more', action.data.children);
      return {
        ...state,
        fetching: false,
        [action.item.name]: normalizePosts(postComments),
      }
      case contentConstants.GET_POST_COMMENTS_FAILURE:
      return {
        ...state,
        error: true,
      }
    default:
      return state;
  }
}


const allReducers = {
  posts: contentReducer,
  comments: postCommentsReducer,
  subreddits: subRedditsReducer,
};

export default allReducers;
