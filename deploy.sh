#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'https://kamilabartnik.github.io/terraformacja/' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://kamilabartnik.github.io
# git push -f git@github.com:kamilabartnik/kamilabartnik.github.io.git master

# if you are deploying to https://kamilabartnik.github.io/terraformacja
git push -f git@github.com:kamilabartnik/terraformacja.git master:gh-pages

cd -
