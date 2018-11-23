import { has, map } from 'lodash/fp';

export const convertHex = (hex, opacity = 100) => {
  const newHex = hex.replace('#','');
  const r = parseInt(newHex.substring(0,2), 16);
  const g = parseInt(newHex.substring(2,4), 16);
  const b = parseInt(newHex.substring(4,6), 16);

  const result = 'rgba('+r+', '+g+', '+b+', '+opacity/100+')';
  return result;
}

export const regexFilters = {
  youtube: /http[s]?:\/\/(www\.)?youtu(\.be|be\.com).*/i,
  image: /\.(gif|jpg|jpeg|tiff|png)$/i,
  youtubeShort: /http[s]?:\/\/(www\.)?youtu\.be\/(.*)/i,
};

export const normalizePosts = (arr, baseKey = 'name') => {
  const d = {};
  map.convert({cap: false})((post, index) => {
    const key = post.data[baseKey];
    d[key] = d[key] || {};
    d[key] = {
      ...arr[index].data,
    }
  }, arr);

  return d;
}

export const allCollection = (arr, baseKey = 'name') => map(post => post.data[baseKey], arr);


export const getSubredditInfo = (list = {}, id, key = '') => {
  const { model } = list;
  if (has(id, model)) {
    if (key) {
      return model[id][key];
    }
    return model[id];
  }
  return null;
}
