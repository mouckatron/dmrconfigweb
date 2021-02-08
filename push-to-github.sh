#! /bin/bash

git checkout gh-pages
git merge master

ng build --prod --output-path docs --base-href /dmrconfigweb/
git add docs
git commit -m 'auto GH pages build and push'

git push origin gh-pages
git checkout master
