var WordPOS = require('wordpos');
let wordpos = new WordPOS({
  // preload: true,
  dictPath: '/wordpos/dict',
  profile: true
});

wordpos.getAdverbs('this is lately a likely tricky business this is')
  .then(res => {
    console.log(res); // ["lately", "likely"]
  });