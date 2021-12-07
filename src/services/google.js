import axios from 'axios';

// Parses search terms into an url
const parseSearchTerms = (searchTerms) => {
  let searchUrl = searchTerms.replaceAll(' ', '%20');

  return searchUrl;
}

const getGoogleSearch = async (searchTerms) => {
  const urlSuffix = parseSearchTerms(searchTerms);

  const url = `https://www.google.com/search?gws_rd=ssl&site=&source=hp&q=${urlSuffix}`;

  return await axios.get(url);
}

export { getGoogleSearch };