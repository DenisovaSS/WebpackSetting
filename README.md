# WebpackSetting

This project about first setting Webpack with Prettier, ESLint, Husky.

What you need to write in terminal:
Project Webpack
-git init
-git clone your repository
-npm init(start your project)
-npm i -D webpack
-npm i -D webpack-cli webpack-dev-server (webpack-cli - provides a flexible set of commands, development server - provides live reloading)
-npm install --save-dev html-webpack-plugin(for working with HTML)
-npm install --save-dev html-loader( for updating html after change)(you need to write in index.js in top (import "./index.html"; for waching html))
-npm install --save-dev style-loader(for plugin css)
-npm install --save-dev css-loader(for plugin css)
-npm install --save-dev mini-css-extract-plugin(This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS)
-npm install sass-loader sass webpack --save-dev(if you use sass)
If you want to use something not supported in some browsers, to use:
-npm install --save-dev postcss-loader postcss postcss-preset-env(prefix);
-npm install image-webpack-loader --save-dev (to compress images)
