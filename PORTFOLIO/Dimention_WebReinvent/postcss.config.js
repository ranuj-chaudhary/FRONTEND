const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: ["postcss-preset-env", tailwindcss],
};

// Note: Webpack reads this config via postcss-loader, applies the plugins, and outputs
//  transformed CSS.



/*

autoprefixer – automatically adds vendor prefixes for better browser support.

postcss-nesting – allows nested CSS like in Sass.

postcss-preset-env – lets you use future CSS features today

*/
