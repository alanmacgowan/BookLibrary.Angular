var CONFIG = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://booklibraryangular.herokuapp.com/' : 'http://localhost:3000/',
  apiUrls: {
    books: 'api/books',
    authors: 'api/authors'
  },
  dbHost: process.env.NODE_ENV === 'production' ? 'alan:password@ds137090.mlab.com:37090' : 'localhost',
  dbName: 'booklibrary_angular'
};
module.exports = CONFIG;