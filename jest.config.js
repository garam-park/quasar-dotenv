// 
const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
  ],
  testRegex: '/tests/.*\\.(test|spec)?\\.(js)$',
};