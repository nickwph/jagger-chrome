#!/usr/bin/env bash

# webpack-chrome-extension
cp -r node_modules/WebpackChromeExtension/dev-env .

# fix csp
sed -i '' "s/localhost:3001/localhost:3001 https:\/\/cdn.firebase.com https:\/\/*.firebaseio.com/g" dev-env/manifest/processor/csp.js

# replace webpack config file.
cp webpack.config.js dev-env/webpack/config.js

# codemirror
mkdir -p prebuilds/codemirror
cp node_modules/codemirror/lib/codemirror.css prebuilds/codemirror/codemirror.css

# bootstrap
mkdir -p prebuilds/bootstrap
cp -r node_modules/bootstrap/dist/css prebuilds/bootstrap
cp -r node_modules/bootstrap/dist/fonts prebuilds/bootstrap
