const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({
  future: {
    webpack5: false,
  },
  target: 'serverless'
});