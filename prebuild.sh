# webpack-chrome-extension
cp -r node_modules/WebpackChromeExtension/dev-env .

# codemirror
mkdir -p prebuilds/codemirror
cp node_modules/codemirror/lib/codemirror.css prebuilds/codemirror/codemirror.css

# bootstrap
mkdir -p prebuilds/bootstrap
cp -r node_modules/bootstrap/dist/css prebuilds/bootstrap
cp -r node_modules/bootstrap/dist/fonts prebuilds/bootstrap

# enable scss
sed -i '' "s/  \/\/ 'scss|sass': '\!sass-loader',/  'scss|sass': '\!sass-loader',/g" dev-env/webpack/config.js
