import { has } from 'lodash/fp';

export const convertHex = (hex, opacity = 100) => {
  const newHex = hex.replace('#','');
  const r = parseInt(newHex.substring(0,2), 16);
  const g = parseInt(newHex.substring(2,4), 16);
  const b = parseInt(newHex.substring(4,6), 16);

  const result = 'rgba('+r+', '+g+', '+b+', '+opacity/100+')';
  return result;
}

export function timeFromNow(epochTime){
	// Get time difference in minutes 
	const timeDelta = Math.floor((Date.now()/1000- epochTime)/60);
	switch(timeDelta){
		// if timedelta is zero return Now
		case timeDelta === 0:
			return 'Now';
		// if timedelta is less than 60 return minutes
		case timeDelta < 60:
			return `${timeDelta}m`;
		// return the hour equivalent
		default:
			const hours = Math.floor(timeDelta/60);
			// If hours is less than 24, return hours else return days
			return hours < 24 ? `${hours}h` : `${Math.floor(hours/24)}d`
	}
};

export const regexFilters = {
  youtube: /http[s]?:\/\/(www\.)?youtu(\.be|be\.com).*/i,
  image: /\.(gif|jpg|jpeg|tiff|png)$/i,
  youtubeShort: /http[s]?:\/\/(www\.)?youtu\.be\/(.*)/i,
};

export const normalizePosts = (arr, baseKey = 'name') => {
  const d = {};
  arr.map((post, index) => {
    const key = post.data[baseKey];
    d[key] = d[key] || {};
    d[key] = {
      ...arr[index].data,
    }
  });

  return d;
}

export const allCollection = (arr, baseKey = 'name') => arr.map(post => post.data[baseKey]);


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
