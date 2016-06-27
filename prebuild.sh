#!/usr/bin/env bash

# webpack-chrome-extension
cp -r node_modules/WebpackChromeExtension/dev-env .

# fix csp
sed -i '' "s/localhost:3001/localhost:3001 https:\/\/cdn.firebase.com https:\/\/*.firebaseio.com https:\/\/apis.google.com/g" dev-env/manifest/processor/csp.js

# replace webpack config file.
cp webpack.config.js dev-env/webpack/config.js

# fix firebase error: chrome-extension://apis.google.com/js/api.js?onload=__iframefcb195969 Failed to load resource: net::ERR_FAILED
sed -i '' 's/"\/\/apis.google.com/"https:\/\/apis.google.com/g' node_modules/firebase/firebase.js
sed -i '' 's/"\/\/apis.google.com/"https:\/\/apis.google.com/g' node_modules/firebase/firebase-auth.js