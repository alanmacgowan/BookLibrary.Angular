var CONFIG = {
  baseUrl: process.env.ENV === 'production' ? 'https://booklibraryangular.herokuapp.com/' : 'http://localhost:3000/',
  apiUrls: {
    books: 'api/books',
    authors: 'api/authors'
  },
  dbHost: 'alan:password@ds137090.mlab.com:37090',
  dbName: 'booklibrary_angular'
};
module.exports = CONFIG;