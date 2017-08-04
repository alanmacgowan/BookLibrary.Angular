export let CONFIG = {
  baseUrl: process.env.ENV === 'production' ? 'https://booklibraryangular.herokuapp.com/' : 'http://localhost:3000/',
  apiUrls: {
    books: 'api/books',
    authors: 'api/authors'
  }
};
