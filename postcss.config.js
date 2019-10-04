const PostCSSPresetEnv = require('postcss-preset-env');
const Autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    PostCSSPresetEnv({ stage: 0 }),
    Autoprefixer,
  ],
};
